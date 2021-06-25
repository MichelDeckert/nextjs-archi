import { useRouter } from "next/router";
import slugify from "../utils/slugify";
import cropSentence from "../utils/cropSentence";
import Image from "next/image";
import styles from "../styles/ProjectCardSmall.module.css";

export default function ProjectCardSmall({ project }) {
	const router = useRouter();
	const { image, projectId, name, city } = project;

	function handleClick(slug) {
		router.push(`/project/${slug}`);
	}

	return (
		<div
			className={styles.gallery_image}
			onClick={handleClick.bind(null, slugify(projectId, name, city))}>
			<Image
				src={image.imageProps.src}
				alt={image.alt}
				placeholder="blur"
				blurDataURL={image.imageProps.blurDataURL}
				layout="fill"
				objectFit="cover"
				objectPosition="center center"
				priority={true}
				quality={10}
			/>
			<div className={styles.overlay}>
				<h2 className={styles.overlay_title}>{`${name} - ${city}`}</h2>
				<h2 className={styles.overlay_description}>
					{cropSentence(image.description, 50)}
				</h2>
			</div>
		</div>
	);
}
