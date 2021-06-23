import { useState } from "react";
import GalleryContainer from "../modules/GalleryContainer";
import styles from "../styles/Gallery.module.css";
import Control from "../modules/Control";
import Counter from "../modules/Counter";

export default function Gallery({ images, totalPages }) {
	const [currentPage, setCurrentPage] = useState(1);

	function handleArrowClick(direction) {
		if (direction === "right") {
			if (currentPage === totalPages) setCurrentPage(1);
			else setCurrentPage(currentPage + 1);
		} else if (direction === "left") {
			if (currentPage === 1) setCurrentPage(totalPages);
			else setCurrentPage(currentPage - 1);
		}
	}

	return (
		<section className={styles.gallery}>
			<h1 className={`${styles.title} secondary-title`}>Galerie</h1>
			<div className={styles.main_galery}>
				{images.map((arr, arrId) => (
					<GalleryContainer
						images={arr}
						currentPage={currentPage}
						imagesId={arrId}
						key={arrId}
					/>
				))}
			</div>
			<div className={styles.controllers}>
				<Counter current={currentPage} total={totalPages} />
				<Control handleClick={handleArrowClick} />
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const { projects } = await import("./api/db.json");

	let imagesList = [];

	projects.forEach(({ name, city, images, id: projectId }) =>
		images.forEach(
			({ path, width, height, description: imageDescription }, id) => {
				imagesList.push({
					height,
					width,
					path,
					name,
					city,
					id,
					projectId,
					imageDescription,
				});
			}
		)
	);

	const totalPages = Math.ceil(imagesList.length / 10);

	let imagesArr = [];
	for (let i = 0; i < totalPages; i++) {
		const step = i * 10;
		if (step + 10 >= imagesList.length) imagesArr.push(imagesList.slice(step));
		else imagesArr.push(imagesList.slice(step, step + 10));
	}

	return {
		props: {
			images: imagesArr,
			totalPages,
		},
	};
}
