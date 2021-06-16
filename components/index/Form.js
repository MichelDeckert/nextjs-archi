import { useEffect, useRef } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import styles from "../../styles/Form.module.css";
import GoTo from "../../modules/GoTo";

export default function Form() {
	const section = useRef();

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>Nous contacter</h2>
			<form action="">
				<input
					type="text"
					name="name"
					className={styles.name}
					placeholder="Nom Prénom"
				/>
				<input
					type="tel"
					name="phone"
					className={styles.phone}
					placeholder="Téléphone"
					required
				/>
				<input
					type="email"
					name="email"
					className={styles.email}
					placeholder="E-mail"
					required
				/>
				<input
					type="subject"
					name="subject"
					className={styles.subject}
					placeholder="Service"
				/>
				<textarea
					name="message"
					className={styles.message}
					placeholder="Votre message"
					required></textarea>
			</form>
			<img src="./images/form-img.svg" alt="form" />
			<div className={styles.condition}>
				<input type="checkbox" name="agree" className="agree" />
				<p>
					En envoyant ce message, vous acceptez la politique de confidentialité
				</p>
			</div>
			<div className={styles.button}>
				<GoTo subclass={styles.goto} theme="dark" text="envoyer" />
			</div>
		</section>
	);
}
