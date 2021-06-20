import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Gallery.module.css";
import Control from "../../modules/Control";
import Counter from "../../modules/Counter";

export default function Gallery({ page, totalPages, images }) {
	const router = useRouter();

	function handleArrowClick(direction) {
		if (direction === "right") {
			if (page === totalPages) router.push(`/gallery/1`);
			else router.push(`/gallery/${page + 1}`);
		} else if (direction === "left") {
			if (page === 1) router.push(`/gallery/${totalPages}`);
			else router.push(`/gallery/${page - 1}`);
		}
	}

	return (
		<section className={styles.gallery}>
			<h1 className={`${styles.title} secondary-title`}>Galerie</h1>
			<div className={styles.gallery_container}>
				{images.map(({ path, id, name, height, width }, idx) => (
					<div className={styles.gallery_image} key={idx}>
						<Image
							src={path}
							alt={`${name} - ${id}`}
							width={width}
							height={height}
							layout="responsive"
							objectFit="cover"
							objectPosition="center center"
							quality={10}
							priority={true}
						/>
					</div>
				))}
			</div>
			<div className={styles.controllers}>
				<Counter current={page} total={totalPages} />
				<Control handleClick={handleArrowClick} />
			</div>
		</section>
	);
}

export async function getStaticPaths() {
	const { projects } = await import("../api/db.json");

	let numberOfImages = 0;
	projects.forEach(({ images }) => {
		numberOfImages += images.length;
	});

	const numberOfPages = Math.ceil(numberOfImages / 10);

	let paths = [];
	for (let i = 0; i < numberOfPages; i++) {
		paths.push({ params: { page: (i + 1).toString() } });
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(ctx) {
	const page = Number(ctx.params.page);
	const { projects } = await import("../api/db.json");

	let imagesList = [];

	projects.forEach(({ name, city, images }) =>
		images.forEach(({ path, width, height }, id) => {
			imagesList.push({
				height,
				width,
				path,
				name,
				city,
				id,
			});
		})
	);

	let imagesArr = [];

	for (let i = 0; i < page; i++) {
		let step = i * 10;
		if (step + 10 >= imagesList.length) imagesArr.push(imagesList.slice(step));
		else imagesArr.push(imagesList.slice(step, step + 10));
	}

	return {
		props: {
			page,
			totalPages: Math.ceil(imagesList.length / 10),
			images: imagesArr[page - 1],
		},
	};
}
