import cropSentence from "../utils/cropSentence";
import Image from "next/image";
import styles from "../styles/ProjectCardSmall.module.css";

export default function ProjectCardSmall({ project, imagesId, currentPage }) {
	const { path, id, name, city, imageDescription } = project;

	return (
		<div className={styles.gallery_image}>
			<Image
				src={path}
				alt={`${name} - ${id}`}
				layout="fill"
				objectFit="cover"
				objectPosition="center center"
				priority={currentPage - 1 === imagesId}
				quality={10}
			/>
			<div className={styles.overlay}>
				<h2 className={styles.overlay_title}>{`${name} - ${city}`}</h2>
				<h2 className={styles.overlay_description}>
					{cropSentence(imageDescription, 50)}
				</h2>
			</div>
		</div>
	);
}
