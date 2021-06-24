import ProjectCardSmall from "./ProjectCardSmall";
import styles from "../styles/GalleryContainer.module.css";

export default function GalleryContainer({ images, currentPage, imagesId }) {
	return (
		<div
			className={`${styles.gallery_container} ${
				currentPage - 1 === imagesId ? "" : styles.hidden
			}`}
			style={{
				transform: `translateX(${(1 - currentPage + imagesId) * 120}%)`,
			}}>
			{images.map((project, idx) => (
				<ProjectCardSmall project={project} key={idx} />
			))}
		</div>
	);
}
