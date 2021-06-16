import { useEffect, useRef } from "react";
import { addScrollEvent } from "../../utils/addScrollEvent";
import styles from "../../styles/Goals.module.css";

export default function Goals() {
	const section = useRef();

	useEffect(() => {
		addScrollEvent(section.current);
	}, []);

	return (
		<section className={`${styles.section} section`} ref={section}>
			<h2 className={`${styles.title} secondary-title`}>
				Objectifs principaux
			</h2>
			<div className={styles.info1}>
				<p className={styles.num}>1</p>
				<p className={styles.text}>
					Créer un environnement confortable et améliorer la qualité du service
					client
				</p>
			</div>
			<div className={styles.info2}>
				<p className={styles.num}>2</p>
				<p className={styles.text}>
					Améliorer constamment la qualité des services fournis par formation du
					personnel, achat de nouvel équipement et publicité améliorée pour le
					marché
				</p>
			</div>
		</section>
	);
}
