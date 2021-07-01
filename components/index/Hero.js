import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../../modules/GoTo";
import Control from "../../modules/Control";
import Counter from "../../modules/Counter";
import styles from "../../styles/Hero.module.css";
import slugify from "../../utils/slugify";

export default function Hero({ projects }) {
	const [slideToShow, setSlideToShow] = useState(0);
	const router = useRouter();
	const slider = useRef();
	const content = useRef();

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

	useEffect(() => {
		addScrollEvent(content.current);
		addScrollEvent(slider.current);
	}, []);

	return (
		<section className={`${styles.hero} section`}>
			<div className={styles.content} ref={content}>
				<div className={styles.title_container}>
					{projects.map(({ id, name, city }, idx) => (
						<div
							key={id}
							className={`${styles.title} ${
								idx === slideToShow ? styles.shown : styles.hidden
							}`}>
							<span className={styles.project_name}>{name}</span>
							<span className={styles.project_city}>{city}</span>
						</div>
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
							src={images[0].imageProps.src}
							alt={images[0].imageProps.alt}
							layout="fill"
							placeholder="blur"
							blurDataURL={images[0].imageProps.blurDataURL}
							objectFit="cover"
							objectPosition={`center ${images[0].horizontal}`}
							quality={50}
							priority={true}
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
