import Image from "next/image";
import GoTo from "./GoTo";
import styles from "../styles/ProjectCard.module.css";
import cropSentence from "../utils/cropSentence";

export default function ProjectCard({ project, last }) {
	return (
		<div className={`${styles.project_card} ${!last ? styles.notlast : ""}`}>
			<div className={styles.image_container}>
				<Image
					src={project.imagePath}
					alt={`${project.name} - ${project.city}`}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					quality={25}
				/>
			</div>
			<div className={styles.info_container}>
				<h2 className={styles.title}>{project.name}</h2>
				<h3 className={styles.undertitle}>{project.city}</h3>
				<p className={styles.description}>
					{cropSentence(project.description, 350)}
				</p>
				<GoTo subclass={styles.goto} text="voir" />
			</div>
		</div>
	);
}
