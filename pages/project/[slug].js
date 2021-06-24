import Image from "next/image";
import placeholder from "../../public/images/placeholder.png";
import styles from "../../styles/Project.module.css";
import slugify from "../../utils/slugify";

export default function Project({ project, id }) {
	const { name, city, images, description } = project;

	return (
		<div className={styles.project}>
			<div className={styles.titles}>
				<h1 className={`${styles.project_name} secondary-title`}>{name}</h1>
				<h2 className={`${styles.project_city} secondary-title`}>{city}</h2>
			</div>
			<div className={styles.content}>
				<Image
					alt={`${images[1].name}-${images[1].city}-1`}
					src={images[1].path}
					width={images[1].width}
					height={images[1].height}
					objectFit="cover"
					objectPosition={`center ${images[1].horizontal}`}
					quality={50}
				/>
				<div className={styles.main_content}>
					<div className={styles.main_image}>
						<Image
							alt={`${images[0].name}-${images[0].city}-0`}
							src={images[0].path}
							layout="fill"
							objectFit="cover"
							quality={50}
						/>
					</div>
					<p className={styles.text}>{description}</p>
				</div>
				<div className={styles.bottom_images}>
					<Image
						alt={`${images[2].name}-${images[2].city}-2`}
						src={images[2].path}
						width={images[2].width}
						height={images[2].height}
						objectFit="cover"
						objectPosition={`center ${images[2].horizontal}`}
						quality={50}
					/>
					<Image
						alt={`${images[3].name}-${images[3].city}-3`}
						src={images[3].path}
						width={images[3].width}
						height={images[3].height}
						objectFit="cover"
						objectPosition={`center ${images[3].horizontal}`}
						quality={50}
					/>
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { projects } = await import("../api/db.json");

	const paths = projects.map(({ name, city, id }) => ({
		params: { slug: slugify(id, name, city) },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(ctx) {
	const { projects } = await import("../api/db.json");
	const idx = Number(ctx.params.slug.split("-")[0]);

	const project = projects.find(({ id }) => idx === id);

	return {
		props: {
			project,
		},
	};
}
