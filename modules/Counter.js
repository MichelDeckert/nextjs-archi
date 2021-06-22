import styles from "../styles/Counter.module.css";

export default function Counter({ current, total }) {
	return (
		<div className={styles.slider_counter}>
			<h4 className={styles.current_slide}>
				{current < 10 ? `0${current}` : current + 1}
			</h4>
			<img src="/icons/slash.svg" alt="slash" />
			<h4 className={styles.total_slides}>
				{total < 10 ? `0${total}` : total}
			</h4>
		</div>
	);
}
