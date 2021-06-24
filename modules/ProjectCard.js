import Image from "next/image";
import { useRouter } from "next/router";
import slugify from "../utils/slugify";
import GoTo from "./GoTo";
import styles from "../styles/ProjectCard.module.css";
import cropSentence from "../utils/cropSentence";

export default function ProjectCard({ project, last }) {
	const { id, name, city, description, images } = project;
	const router = useRouter();

	function handleClick() {
		router.push(`/project/${slugify(id, name, city)}`);
	}

	return (
		<div className={`${styles.project_card} ${!last ? styles.notlast : ""}`}>
			<div className={styles.image_container}>
				<Image
					src={images[0].imageProps.src}
					alt={images[0].imageProps.alt}
					layout="fill"
					placeholder="blur"
					blurDataURL={images[0].imageProps.blurDataURL}
					objectFit="cover"
					objectPosition="center center"
					quality={25}
					priority={true}
				/>
			</div>
			<div className={styles.info_container}>
				<h2 className={styles.title}>{name}</h2>
				<h3 className={styles.undertitle}>{city}</h3>
				<p className={styles.description}>{cropSentence(description, 200)}</p>
				<GoTo subclass={styles.goto} text="voir" handleClick={handleClick} />
			</div>
		</div>
	);
}
