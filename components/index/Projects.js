import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/ProjectsHome.module.css";
import GoTo from "../../modules/GoTo";
import { addScrollEvent } from "../../utils/addScrollEvent";
import slugify from "../../utils/slugify";

export default function Projects({ projects }) {
	const router = useRouter();
	const section = useRef();

	function handleClick(args) {
		const [path, slug] = args;
		router.push(`${path}${slug}`);
	}

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>Nos projets</h2>
			<div className={styles.images}>
				{projects
					.sort((a, b) => b.name.length - a.name.length)
					.map(({ images, name, city, id }, idx) => (
						<div className={styles.img} key={idx}>
							<Image
								src={images[0].imageProps.src}
								alt={images[0].alt}
								layout="fill"
								placeholder="blur"
								blurDataURL={images[0].imageProps.blurDataURL}
								objectFit="cover"
								objectPosition={`center ${images[0].horizontal}`}
								quality={25}
								priority={true}
							/>
							<div className={styles.overlay}>
								<p className={styles.city}>{city}</p>
								<p className={styles.name}>{name}</p>
								<div
									className={styles.link}
									onClick={handleClick.bind(null, [
										"/project/",
										slugify(id, name, city),
									])}>
									<span>LIRE</span>
									<img
										src="./icons/arrow-2-right-long-white.svg"
										alt="arrow left"
									/>
								</div>
							</div>
						</div>
					))}
			</div>
			<GoTo
				theme="dark"
				subclass={styles.goto}
				animate={true}
				text="tous nos projets"
				handleClick={handleClick.bind(null, ["/projects/", 1])}
			/>
		</section>
	);
}
