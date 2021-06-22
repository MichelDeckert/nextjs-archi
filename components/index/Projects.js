import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/ProjectsHome.module.css";
import GoTo from "../../modules/GoTo";
import { addScrollEvent } from "../../utils/addScrollEvent";

export default function Projects({ projects }) {
	const section = useRef();

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>Nos projets</h2>
			<div className={styles.images}>
				{projects
					.sort((a, b) => b.name.length - a.name.length)
					.map(({ images, name, city }, id) => (
						<div className={styles.img} key={id}>
							<Image
								className={styles.project_image}
								src={images[0].path}
								alt={name}
								layout="fill"
								objectFit="cover"
								objectPosition="center 35%"
								quality={15}
								priority={true}
							/>
							<div className={styles.overlay}>
								<h4>{city}</h4>
								<h3>{name}</h3>
								<div className={styles.link}>
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
			/>
		</section>
	);
}
