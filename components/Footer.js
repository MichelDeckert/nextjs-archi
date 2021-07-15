import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<img className={styles.logo} src="/logo-white.svg" alt="logo" />
				<div className={styles.informations}>
					<p className={styles.title}>Informations</p>
					<ul className={styles.footer_list}>
						<li>
							<Link href="/">Accueil</Link>
						</li>
						<li>
							<Link href="/gallery">Galerie</Link>
						</li>
						<li>
							<Link href="/projects/1">Projets</Link>
						</li>
						<li>
							<Link href="/contacts">Contacts</Link>
						</li>
					</ul>
				</div>
				<div className={styles.contact}>
					<p className={styles.title}>Contacts</p>
					<ul className={styles.footer_list}>
						<li>
							<img src="/icons/localisation.svg" alt="" />
							<span>
								100000, République du Kazakhstan, Karaganda, st. Télévision 10
							</span>
						</li>
						<li>
							<img src="/icons/phone.svg" alt="" />
							<span> +7 (701) 77 76 811 </span>
						</li>
						<li>
							<img src="/icons/email.svg" alt="" />
							<span> Galym.sultanov@mail.ru </span>
						</li>
					</ul>
				</div>
				<div className={styles.social}>
					<p className={styles.title}>Réseaux sociaux</p>
					<ul className={styles.footer_list}>
						<li>
							<img src="/icons/facebook.svg" alt="facebook" />
						</li>
						<li>
							<img src="/icons/twitter.svg" alt="twitter" />
						</li>
						<li>
							<img src="/icons/linkedin.svg" alt="linkedin" />
						</li>
						<li>
							<img src="/icons/pininterest.svg" alt="pininterest" />
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>&copy; 2019 Digital Project. Tous droits réservés</p>
			</div>
		</footer>
	);
}
