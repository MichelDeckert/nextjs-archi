import { useEffect, useRef, useState, Fragment } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import styles from "../../styles/Hero.module.css";

export default function Hero({ projects, isLoading, setIsLoading }) {
	const section = useRef();
	const slider = useRef();
	const [slideToShow, setSlideToShow] = useState(0);

	function handleSlideSwitchClick(direction) {
		if (direction === "right") {
			if (slideToShow === projects.length - 1) setSlideToShow(0);
			else setSlideToShow(slideToShow + 1);
		} else if (direction === "left") {
			if (slideToShow === 0) setSlideToShow(projects.length - 1);
			else setSlideToShow(slideToShow - 1);
		}
	}

	function checkComplete() {
		const completed = [...slider.current.children]
			.filter(child => child.firstChild.className.includes("slide"))
			.map(child => child.firstChild)
			.every(img => img.complete === true);
		console.log("checkCompleted", completed);
		return completed;
	}

	function handleImageLoad() {
		if (checkComplete()) {
			setIsLoading(false);
		}
	}

	/* useEffect(() => {
		console.log(imagesLoaded);
		if (imagesLoaded.length === projects.length && !areImagesInCache) {
			console.log("wait loading");
			setIsLoading(false);
		}
	}, [imagesLoaded, areImagesInCache]); */

	useEffect(() => {
		console.log("isLoading", isLoading);
		if (!isLoading) {
			addScrollEvent(slider.current, 500);
			addScrollEvent(section.current, 500);
		}
	}, [isLoading]);

	useEffect(() => {
		if (checkComplete()) {
			setIsLoading(false);
		}
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
					<Fragment key={id}>
						<Image
							className={`${styles.slide} ${
								idx === slideToShow ? "" : styles.hide
							}`}
							id={idx}
							src={images[0].path}
							alt={`${name} - ${city}`}
							layout="fill"
							objectFit="cover"
							objectPosition="center center"
							quality={30}
							priority={true}
							onLoad={handleImageLoad}
						/>
						<GoTo
							text="voir"
							subclass={`${styles.goto} ${
								idx === slideToShow ? "" : styles.hide
							}`}
						/>
					</Fragment>
				))}
			</div>
		</section>
	);
}
