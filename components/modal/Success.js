import GoTo from "../../modules/GoTo";
import styles from "../../styles/Success.module.css";

export default function Success({ onClose, buttonText }) {
	return (
		<div className={styles.success}>
			<img className={styles.img} src="/success.svg" alt="success" />
			<p className={styles.thank}>Merci !</p>
			<p className={styles.text}>
				Votre message a été envoyé, nous vous contacterons sous peu.{" "}
			</p>
			<GoTo
				handleClick={onClose}
				text={buttonText}
				theme="dark"
				subclass={styles.goto}
			/>
		</div>
	);
}
