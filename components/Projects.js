import { useEffect, useRef } from "react";
import styles from "../styles/Projects.module.css";
import GoTo from "../modules/GoTo";
import { addScrollEvent } from "../utils/addScrollEvent";

export default function Projects() {
	const title = useRef();
	const images = useRef();
	const img1 = useRef();
	const img2 = useRef();
	const img3 = useRef();
	const img4 = useRef();
	const img5 = useRef();

	useEffect(() => {
		addScrollEvent(title.current);
		addScrollEvent(images.current);
		addScrollEvent(img1.current);
		addScrollEvent(img2.current);
		addScrollEvent(img3.current);
		addScrollEvent(img4.current);
		addScrollEvent(img5.current);
	}, []);

	return (
		<section className={`${styles.section} section`}>
			<h2 ref={title} className={`${styles.title} secondary-title`}>
				Nos projets
			</h2>
			<div ref={images} className={styles.images}>
				<div ref={img1} className={styles.img}>
					<img src="./images/section3-img1.svg" alt="building" />
					<div className={styles.overlay}>
						<h3>CENTRE DE LOISIRS</h3>
						<div className={styles.link}>
							<span>LIRE</span>
							<img
								src="./icons/arrow-2-right-long-white.svg"
								alt="arrow left"
							/>
						</div>
					</div>
				</div>
				<div ref={img2} className={styles.img}>
					<img src="./images/section3-img2.svg" alt="building" />
					<div className={styles.overlay}>
						<h3>CENTRE DE LOISIRS</h3>
						<div className={styles.link}>
							<span>LIRE</span>
							<img
								src="./icons/arrow-2-right-long-white.svg"
								alt="arrow left"
							/>
						</div>
					</div>
				</div>
				<div ref={img3} className={styles.img}>
					<img src="./images/section3-img3.svg" alt="building" />
					<div className={styles.overlay}>
						<h3>CENTRE DE LOISIRS</h3>
						<div className={styles.link}>
							<span>LIRE</span>
							<img
								src="./icons/arrow-2-right-long-white.svg"
								alt="arrow left"
							/>
						</div>
					</div>
				</div>
				<div ref={img4} className={styles.img}>
					<img src="./images/section3-img4.svg" alt="building" />
					<div className={styles.overlay}>
						<h3>CENTRE DE LOISIRS</h3>
						<div className={styles.link}>
							<span>LIRE</span>
							<img
								src="./icons/arrow-2-right-long-white.svg"
								alt="arrow left"
							/>
						</div>
					</div>
				</div>
				<div ref={img5} className={styles.img}>
					<img src="./images/section3-img5.svg" alt="building" />
					<div className={styles.overlay}>
						<h3>CENTRE DE LOISIRS</h3>
						<div className={styles.link}>
							<span>LIRE</span>
							<img
								src="./icons/arrow-2-right-long-white.svg"
								alt="arrow left"
							/>
						</div>
					</div>
				</div>
			</div>
			<GoTo theme="dark" subclass={styles.goto} animate={true} />
			{/* <div className="goto">
				<span>TOUS LES PROJETS</span>
				<img src="./icons/arrow-2-right-long-white.svg" alt="arrow left" />
			</div> */}
		</section>
	);
}
