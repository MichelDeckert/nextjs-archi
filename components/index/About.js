import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/About.module.css";
import { addScrollEvent } from "../../utils/addScrollEvent";
import GoTo from "../../modules/GoTo";

export default function About() {
	const router = useRouter();
	const section = useRef();

	const handleClick = () => {
		router.push("/contacts");
	};

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<div className={styles.images}>
				<img
					src="/images/section1-img1.svg"
					alt="building"
					className={styles.img1}
				/>
				<img
					src="/images/section1-img2.svg"
					alt="building"
					className={styles.img2}
				/>
				<img
					src="/images/section1-img3.svg"
					alt="building"
					className={styles.img3}
				/>
			</div>
			<div className={styles.info}>
				<h2 className="secondary-title">À propos!</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					pellentesque, lectus at tempus ultricies, nibh turpis tempor orci,
					vitae suscipit ante mauris nec dolor. Aenean elementum, est nec
					iaculis egestas, tortor urna maximus diam, ac maximus nisi turpis vel
					nunc. Cras quis varius velit, a eleifend tellus. Nulla et aliquet
					odio. Phasellus ac ex vel velit dapibus suscipit. In hac habitasse
					platea dictumst.Aenean elementum, est neciaculis egestas.
				</p>
				<GoTo
					subclass={styles.goto}
					handleClick={handleClick}
					style={{ marginBottom: "30px" }}
					text="Nous contacter"
				/>
			</div>
		</section>
	);
}
