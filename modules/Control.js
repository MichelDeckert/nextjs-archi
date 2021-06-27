import styles from "../styles/Control.module.css";

export default function Control({ children, handleClick }) {
	console.log(children);
	return (
		<div className={styles.slider_controls}>
			<div
				className={`${styles.arrow_previous} ${styles.slider_arrow}`}
				onClick={handleClick.bind(null, "left")}>
				<img src="/icons/arrow-2-right-long.svg" alt="previous slide" />
			</div>
			{children}
			<div
				className={`${styles.arrow_next} ${styles.slider_arrow}`}
				onClick={handleClick.bind(null, "right")}>
				<img src="/icons/arrow-2-right-long.svg" alt="next slide" />
			</div>
		</div>
	);
}
