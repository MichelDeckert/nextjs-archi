import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<img src="/logo.svg" alt="logo" />
			</div>
			<div className={styles.menu}>
				<ul>
					<li>
						<Link href="/">ACCUEIL</Link>
					</li>
					<li>
						<Link href="/gallery/1">GALERIE</Link>
					</li>
					<li>
						<Link href="/projects">PROJETS</Link>
					</li>
					<li>
						<Link href="/certificats">CERTIFICATS</Link>
					</li>
					<li>
						<Link href="/contacts">CONTACTS</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
