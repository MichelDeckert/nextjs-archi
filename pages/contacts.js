import GoTo from "../modules/GoTo";
import dynamic from "next/dynamic";
import styles from "../styles/Contacts.module.css";

export default function Contacts() {
	const Map = dynamic(() => import("../modules/Map"), {
		loading: () => <p>Map loading...</p>,
		ssr: false,
	});

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
				<GoTo text={"contactez-nous"} theme={"dark"} subclass={styles.goto} />
			</div>
			<div className={styles.map_container}>
				<Map />
			</div>
		</div>
	);
}
