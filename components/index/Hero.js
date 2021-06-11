import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import styles from "../../styles/Hero.module.css";

export default function Hero({ projects }) {
	const section = useRef();
	const slider = useRef();
	const [slideToShow, setSlideToShow] = useState(0);

	const handleSlideMove = () => {
		if (slideToShow === projects.length - 1) {
			setSlideToShow(0);
		} else {
			setSlideToShow(slideToShow + 1);
		}
	};

	useEffect(() => {
		addScrollEvent(slider.current);
		addScrollEvent(section.current, 500);
	}, []);

	return (
		<section className={`${styles.hero} section`}>
			<div className={styles.content} ref={section}>
				{projects.map(({ id, name, city }, idx) => (
					<div
						key={id}
						className={`${styles.title} ${
							idx === slideToShow ? "" : styles.hide
						}`}>
						<h1>
							<span className={styles.project_name}>{name}</span>
							<br />
							<span className={styles.project_city}>{city}</span>
						</h1>
					</div>
				))}
				<div className={styles.slider_controls}>
					<button onClick={handleSlideMove}>+</button>
				</div>
			</div>

			<div className={styles.slider} ref={slider}>
				{projects.map(({ id, name, images, city }, idx) => (
					<div
						key={id}
						className={`${styles.slide} ${
							idx === slideToShow ? "" : styles.hide
						}`}>
						<Image
							className={styles.image}
							src={images[0]}
							alt={`${name} - ${city}`}
							layout="fill"
							objectFit="cover"
							priority="true"
						/>
						<GoTo text="voir" />
					</div>
				))}
			</div>
		</section>
	);
}
