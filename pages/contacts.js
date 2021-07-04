import { useState, useEffect } from "react";
import Modal from "../components/modal/Modal";
import GoTo from "../modules/GoTo";
import dynamic from "next/dynamic";
import styles from "../styles/Contacts.module.css";
import FormModal from "../components/modal/FormModal";
import Success from "../components/modal/Success";

export default function Contacts() {
	const [showModal, setShowModal] = useState(false);
	const [formModalValid, setFormModalValid] = useState(false);
	const Map = dynamic(() => import("../modules/Map"), {
		loading: () => <p>Map loading...</p>,
		ssr: false,
	});

	const onModalClose = () => {
		setShowModal(false);
		setFormModalValid(false);
	};

	const onFormModalValid = () => {
		setFormModalValid(true);
	};

	useEffect(() => {
		if (showModal) {
			document.querySelector("body").classList.add("noscroll");
		} else {
			document.querySelector("body").classList.remove("noscroll");
		}
	}, [showModal]);

	return (
		<div className={`${styles.contacts} section`}>
			<div className={styles.info}>
				<h1 className={`${styles.title} secondary-title`}>Contacts</h1>
				<div className={styles.address}>
					<p>«Digital Project»</p>
					<p>Karaganda, st. Télévision 10</p>
				</div>
				<p>+7 (701) 77 76 811</p>
				<a href="mailto:galym.sultanov@mail.ru">galym.sultanov@mail.ru</a>
				<GoTo
					text={"contactez-nous"}
					theme={"dark"}
					subclass={styles.goto}
					handleClick={() => setShowModal(true)}
				/>
			</div>
			<div className={styles.map_container}>
				<Map />
			</div>
			<Modal show={showModal} onClose={onModalClose}>
				{formModalValid ? (
					<Success onClose={onModalClose} buttonText="fermer" />
				) : (
					<FormModal onValidate={onFormModalValid} />
				)}
			</Modal>
		</div>
	);
}
