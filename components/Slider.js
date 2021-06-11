import { useEffect, useRef } from "react";
import { addScrollEvent } from "../utils/addScrollEvent";
import Image from "next/image";
import GoTo from "../modules/GoTo";
import styles from "../styles/Slider.module.css";

export default function Slider({ data }) {
	const slider = useRef();

	useEffect(() => {
		addScrollEvent(slider.current);
	}, []);

	return (
		<div className={styles.slider} ref={slider}>
			<Image
				className={styles.image}
				src="/images/hero-img1.svg"
				alt="building"
				layout="fill"
			/>
			<GoTo text="voir" />
		</div>
	);
}
