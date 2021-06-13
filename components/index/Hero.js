import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import styles from "../../styles/Hero.module.css";

export default function Hero({ projects }) {
	const section = useRef();
	const slider = useRef();
	const [isLoading, setIsLoading] = useState(true);
	const [slideToShow, setSlideToShow] = useState(0);

	const handleSlideMove = () => {
		if (slideToShow === projects.length - 1) {
			setSlideToShow(0);
		} else {
			setSlideToShow(slideToShow + 1);
		}
	};

	useEffect(() => {
		let interval = setInterval(handleSlideMove, 10000);

		addScrollEvent(slider.current);
		addScrollEvent(section.current, 500);

		return () => clearInterval(interval);
	}, [handleSlideMove]);

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
				<div className={styles.slider_info}>
					<div className={styles.slider_controls}>
						<div className={`${styles.arrow_previous} ${styles.slider_arrow}`}>
							<img src="/icons/arrow-2-right-long.svg" alt="previous slide" />
						</div>
						<div className={`${styles.arrow_next} ${styles.slider_arrow}`}>
							<img src="/icons/arrow-2-right-long.svg" alt="next slide" />
						</div>
					</div>
					<div className={styles.slider_counter}>
						<h4 className={styles.current_slide}>
							{slideToShow + 1 < 10 ? `0${slideToShow + 1}` : slideToShow + 1}
						</h4>
						<img src="./icons/slash.svg" alt="slash" />
						<h4 className={styles.total_slides}>
							{projects.length < 10 ? `0${projects.length}` : projects.length}
						</h4>
					</div>
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
							src={images[0].path}
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
