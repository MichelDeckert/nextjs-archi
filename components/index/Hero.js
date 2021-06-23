import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import Control from "../../modules/Control";
import Counter from "../../modules/Counter";
import styles from "../../styles/Hero.module.css";
import slugify from "../../utils/slugify";

export default function Hero({ projects, isLoading, setIsLoading }) {
	const slider = useRef();
	const [slideToShow, setSlideToShow] = useState(null);
	const [areImagesLoaded, setAreImagesLoaded] = useState(false);
	const imagesElRef = useRef([]);
	const router = useRouter();

	function handleGoToClick(slug) {
		router.push(`/project/${slug}`);
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

	function checkComplete() {
		const completed = [...slider.current.children]
			.filter(el => el.children)
			.map(el =>
				[...el.children]
					.filter(child => child.firstChild.className.includes("slide_image"))
					.map(el => el.firstChild)
			)
			.every(el => el[0].complete === true);

		if (completed) setAreImagesLoaded(true);
	}

	useEffect(() => {
		if (areImagesLoaded) {
			setTimeout(() => {
				setSlideToShow(0);
				setIsLoading(false);
			}, 100);
		}
	}, [areImagesLoaded]);

	useEffect(() => {
		if (imagesElRef.current.length !== projects.length) {
			imagesElRef.current = new Array(projects.length);
		}
		checkComplete();
	}, []);

	return (
		<section
			className={`${styles.hero} section`}
			style={isLoading ? { height: "0px" } : {}}>
			<div
				className={`${styles.content} ${
					isLoading ? styles.hidden : styles.shown
				}`}>
				<div className={styles.title_container}>
					{projects.map(({ id, name, city }, idx) => (
						<h2
							key={id}
							className={`${styles.title} ${
								idx === slideToShow ? styles.shown : styles.hidden
							}`}>
							<span className={styles.project_name}>{name}</span>
							<br />
							<span className={styles.project_city}>{city}</span>
						</h2>
					))}
				</div>
				<div className={styles.slider_info}>
					<Control handleClick={handleSlideSwitchClick} />
					<Counter current={slideToShow + 1} total={projects.length} />
				</div>
			</div>
			<div className={styles.slider} ref={slider}>
				{projects.map(({ id, name, images, city }, idx) => (
					<div
						key={id}
						className={`${styles.slide} ${
							idx === slideToShow ? styles.shown : styles.hidden
						}`}>
						<Image
							className="slide_image"
							src={images[0].path}
							alt={`${name} - ${city}`}
							layout="fill"
							objectFit="cover"
							objectPosition="center center"
							quality={30}
							priority={true}
							onLoad={checkComplete}
						/>
						<GoTo
							text="voir"
							handleClick={handleGoToClick.bind(null, slugify(id, name, city))}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
