import { useEffect, useRef } from "react";
import styles from "../../styles/Goals.module.css";
import { addScrollEvent } from "../../utils/addScrollEvent";

export default function Goals() {
	const title = useRef();
	const info1 = useRef();
	const info2 = useRef();

	useEffect(() => {
		addScrollEvent(title.current);
		addScrollEvent(info1.current);
		addScrollEvent(info2.current);
	}, []);

	return (
		<section className={`${styles.section} section`}>
			<h2 ref={title} className={`${styles.title} secondary-title`}>
				Objectifs principaux
			</h2>
			<div ref={info1} className={styles.info1}>
				<p className={styles.num}>1</p>
				<p className={styles.text}>
					Créer un environnement confortable et améliorer la qualité du service
					client
				</p>
			</div>
			<div ref={info2} className={styles.info2}>
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
