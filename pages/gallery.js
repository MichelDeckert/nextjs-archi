import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import Control from "../modules/Control";
import Counter from "../modules/Counter";

function cropSentence(sentence, length) {
	if (sentence.length <= length) return sentence;

	return `${sentence
		.split("")
		.slice(0, length + 1)
		.join("")
		.trim()} [...]`;
}

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
					<div
						className={`${styles.gallery_container} ${
							currentPage - 1 === arrId
								? ""
								: styles.hidden
						}`}
						style={{transform: `translateX(${id - currentPage - 1 * 100}vw)`}}
						}>
						{arr.map(({ path, id, name, city, imageDescription }, idx) => (
							<div className={styles.gallery_image} key={idx}>
								<Image
									src={path}
									alt={`${name} - ${id}`}
									layout="fill"
									objectFit="cover"
									objectPosition="center center"
									priority={currentPage - 1 === arrId}
									quality={10}
								/>
								<div className={styles.overlay}>
									<h2
										className={styles.overlay_title}>{`${name} - ${city}`}</h2>
									<h2 className={styles.overlay_description}>
										{cropSentence(imageDescription, 50)}
									</h2>
								</div>
							</div>
						))}
					</div>
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

	projects.forEach(({ name, city, images }) =>
		images.forEach(
			({ path, width, height, description: imageDescription }, id) => {
				imagesList.push({
					height,
					width,
					path,
					name,
					city,
					id,
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
