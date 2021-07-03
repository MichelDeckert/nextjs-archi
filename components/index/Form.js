import { useEffect, useRef, useState } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import Image from "next/image";
import formImg from "../../public/images/form-img.jpg";
import styles from "../../styles/Form.module.css";
import GoTo from "../../modules/GoTo";
import Modal from "../Modal";

const TEXT_MAX_LENGTH = 300;

export default function Form() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [agree, setAgree] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const section = useRef();
	const submitButton = useRef();
	const agreeLabel = useRef();
	const form = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		setName("");
		setPhone("");
		setEmail("");
		setSubject("");
		setMessage("");
		setAgree(false);
		setShowModal(true);
	};

	const onModalClose = () => {
		setShowModal(false);
	};

	useEffect(() => {
		if (showModal) {
			document.querySelector("body").classList.add("noscroll");
		} else {
			document.querySelector("body").classList.remove("noscroll");
		}
	}, [showModal]);

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>Nous contacter</h2>
			<form
				action=""
				ref={form}
				className={styles.contact_form}
				onSubmit={handleSubmit}>
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
						pattern="\w{2,}\s\w{2,}"
					/>
					<label htmlFor="phone" hidden>
						Téléphone
					</label>
					<input
						type="tel"
						name="phone"
						className={styles.phone}
						placeholder="Téléphone (ex: 0123456789)"
						value={phone}
						onChange={e => setPhone(e.target.value)}
						required
						pattern="\d{10}"
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
						pattern="^[\w\d]+@\w+\.\w+$"
					/>
					<label htmlFor="subject" hidden>
						Subject
					</label>
					<input
						type="text"
						name="subject"
						className={styles.subject}
						placeholder="Sujet"
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>
					<div className={styles.text_area_container}>
						<label htmlFor="message" hidden>
							Votre message
						</label>
						<textarea
							name="message"
							className={styles.message}
							placeholder="Votre message"
							required
							value={message}
							onChange={e => setMessage(e.target.value)}
							maxLength={TEXT_MAX_LENGTH}></textarea>
						<p className={styles.message_length}>
							{`${TEXT_MAX_LENGTH - message.length} character${
								TEXT_MAX_LENGTH - message.length > 0 ? "s" : ""
							} left.`}
						</p>
					</div>
				</div>
				<div className={styles.form_condition}>
					<input
						type="checkbox"
						name="agree"
						className="agree"
						checked={agree}
						required
						onChange={e => setAgree(e.target.checked)}
					/>
					<label htmlFor="agree" ref={agreeLabel}>
						En envoyant ce message, vous acceptez notre politique de
						confidentialité.
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
			<Modal show={showModal} onClose={onModalClose} buttonText="fermer">
				<img className={styles.modal_img} src="/success.svg" alt="success" />
				<p className={styles.modal_thank}>Merci !</p>
				<p className={styles.modal_text}>
					Votre message a été envoyé, nous vous contacterons sous peu.{" "}
				</p>
			</Modal>
		</section>
	);
}
