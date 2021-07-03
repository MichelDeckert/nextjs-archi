import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import formImg from "../../public/images/form-img.jpg";
import Image from "next/image";
import styles from "../../styles/Form.module.css";
import GoTo from "../../modules/GoTo";

export default function Form() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");
	const [agree, setAgree] = useState(false);
	const section = useRef();
	const submitButton = useRef();

	const handleSubmit = e => {
		e.preventDefault();
	};

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>Nous contacter</h2>
			<form action="" className={styles.contact_form} onSubmit={handleSubmit}>
				<div className={styles.form_inputs}>
					<label htmlFor="name" hidden>
						Nom Prénom
					</label>
					<input
						type="text"
						name="name"
						className={styles.name}
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder="Nom Prénom"
					/>
					<label htmlFor="phone" hidden>
						Téléphone
					</label>
					<input
						type="tel"
						name="phone"
						className={styles.phone}
						placeholder="Téléphone"
						value={phone}
						onChange={e => setPhone(e.target.value)}
						required={true}
					/>
					<label htmlFor="email" hidden>
						E-mail
					</label>
					<input
						type="email"
						name="email"
						className={styles.email}
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<label htmlFor="subject" hidden>
						Service
					</label>
					<input
						type="subject"
						name="subject"
						className={styles.subject}
						placeholder="Service"
						value={service}
						onChange={e => setService(e.target.value)}
					/>
					<label htmlFor="message" hidden>
						Votre message
					</label>
					<textarea
						name="message"
						className={styles.message}
						placeholder="Votre message"
						required
						value={message}
						onChange={e => setMessage(e.target.value)}></textarea>
				</div>
				<div className={styles.form_condition}>
					<input
						type="checkbox"
						name="agree"
						className="agree"
						checked={agree}
						onChange={e => setAgree(e.target.checked)}
					/>
					<label htmlFor="agree">
						En envoyant ce message, vous acceptez la politique de
						confidentialité
					</label>
				</div>
				<input type="submit" value="Submit" hidden ref={submitButton} />
			</form>
			<div className={styles.image_container}>
				<div className={styles.image}>
					<Image
						src={formImg}
						alt="form"
						placeholder="blur"
						layout="fill"
						objectFit="cover"
						quality={30}
						priority={true}
					/>
				</div>
			</div>
			<div className={styles.button}>
				<GoTo
					subclass={styles.goto}
					theme="dark"
					text="envoyer"
					handleClick={() => submitButton.current.click()}
				/>
			</div>
		</section>
	);
}
