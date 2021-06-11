import { useEffect, useRef } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import styles from "../../styles/Form.module.css";
import GoTo from "../../modules/GoTo";

export default function Form() {
	const title = useRef();
	const img = useRef();
	const name = useRef();
	const phone = useRef();
	const email = useRef();
	const subject = useRef();
	const message = useRef();
	const condition = useRef();
	const button = useRef();

	useEffect(() => {
		addScrollEvent(title.current);
		addScrollEvent(img.current);
		addScrollEvent(name.current);
		addScrollEvent(phone.current);
		addScrollEvent(email.current);
		addScrollEvent(subject.current);
		addScrollEvent(message.current);
		addScrollEvent(condition.current);
		addScrollEvent(button.current);
	}, []);

	return (
		<section className={`${styles.section} section`}>
			<h2 ref={title} className={`${styles.title} secondary-title`}>
				Nous contacter
			</h2>
			<form action="">
				<input
					ref={name}
					type="text"
					name="name"
					className={styles.name}
					placeholder="Nom Prénom"
				/>
				<input
					ref={phone}
					type="tel"
					name="phone"
					className={styles.phone}
					placeholder="Téléphone"
					required
				/>
				<input
					ref={email}
					type="email"
					name="email"
					className={styles.email}
					placeholder="E-mail"
					required
				/>
				<input
					ref={subject}
					type="subject"
					name="subject"
					className={styles.subject}
					placeholder="Service"
				/>
				<textarea
					ref={message}
					name="message"
					className={styles.message}
					placeholder="Votre message"
					required></textarea>
			</form>
			<img ref={img} src="./images/form-img.svg" alt="form" />
			<div ref={condition} className={styles.condition}>
				<input type="checkbox" name="agree" className="agree" />
				<p>
					En envoyant ce message, vous acceptez la politique de confidentialité
				</p>
			</div>
			<div ref={button} className={styles.button}>
				<GoTo subclass={styles.goto} theme="dark" text="envoyer" />
			</div>
		</section>
	);
}
