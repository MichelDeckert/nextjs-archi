import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import styles from "../../styles/Hero.module.css";

export default function Hero({ projects, isLoading, setIsLoading }) {
	const section = useRef();
	const slider = useRef();
	const [imagesLoaded, setImagesLoaded] = useState([
		new Array(projects.length).fill(false),
	]);
	const [slideToShow, setSlideToShow] = useState(0);

	function handleImagesLoaded(id) {
		if (imagesLoaded.length) {
			let newImagesLoaded = [...imagesLoaded];
			newImagesLoaded[id] = true;
			setImagesLoaded(newImagesLoaded);
		}
	}

	function handleSlideSwitchClick(direction) {
		if (direction === "right") {
			if (slideToShow === projects.length - 1) setSlideToShow(0);
			else setSlideToShow(slideToShow + 1);
		} else if (direction === "left") {
			if (slideToShow === 0) setSlideToShow(projects.length - 1);
			else setSlideToShow(slideToShow - 1);
		}
	}

	useEffect(() => {
		if (imagesLoaded.length && imagesLoaded.every(loaded => loaded === true)) {
			setIsLoading(false);
		}
		if (!isLoading) {
			addScrollEvent(slider.current);
			addScrollEvent(section.current, 500);
		}
	}, [isLoading, imagesLoaded]);

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
						<div
							className={`${styles.arrow_previous} ${styles.slider_arrow}`}
							onClick={handleSlideSwitchClick.bind(null, "left")}>
							<img src="/icons/arrow-2-right-long.svg" alt="previous slide" />
						</div>
						<div
							className={`${styles.arrow_next} ${styles.slider_arrow}`}
							onClick={handleSlideSwitchClick.bind(null, "right")}>
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
							objectPosition="center center"
							quality={30}
							priority={true}
							onLoad={handleImagesLoaded.bind(null, idx)}
						/>
						<GoTo text="voir" />
					</div>
				))}
			</div>
		</section>
	);
}
