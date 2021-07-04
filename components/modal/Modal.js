import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GoTo from "../../modules/GoTo";
import styles from "../../styles/Modal.module.css";

export default function Modal({ children, show, onClose, buttonText }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return ReactDOM.createPortal(
			<div
				className={`${styles.modal_container} ${!show ? styles.hidden : ""}`}>
				<div className={styles.modal}>
					<img
						className={styles.close_modal}
						src="/modal_close.svg"
						alt="close modal"
						onClick={onClose}
					/>
					{children}
				</div>
			</div>,
			document.getElementById("modal-root")
		);
	}

	return null;
}
