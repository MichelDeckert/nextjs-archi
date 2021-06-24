import { useRouter } from "next/dist/client/router";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
	const router = useRouter();

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo} onClick={() => router.push("/")}>
				<img src="/logo.svg" alt="logo" />
			</div>
			<div className={styles.menu}>
				<ul>
					<li>
						<Link href="/">ACCUEIL</Link>
					</li>
					<li>
						<Link href="/gallery">GALERIE</Link>
					</li>
					<li>
						<Link href="/projects/1">PROJETS</Link>
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
