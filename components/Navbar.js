import { useRouter } from "next/dist/client/router";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
	const router = useRouter();

	const handleLinkClick = () => {
		if (isMenuOpen) setIsMenuOpen(false);
	};

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.logo} onClick={() => router.push("/")}>
				<img src="/logo.svg" alt="logo" />
			</div>
			<div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
				<img
					className={styles.menu_svg}
					src={!isMenuOpen ? "/menu.svg" : "/close.svg"}
					alt="menu burger"
					onClick={handleMenuClick}
				/>
				<ul className={styles.menu_list}>
					<li onClick={handleLinkClick}>
						<Link href="/">ACCUEIL</Link>
					</li>
					<li onClick={handleLinkClick}>
						<Link href="/gallery">GALERIE</Link>
					</li>
					<li onClick={handleLinkClick}>
						<Link href="/projects/1">PROJETS</Link>
					</li>
					<li onClick={handleLinkClick}>
						<Link href="/certificats">CERTIFICATS</Link>
					</li>
					<li onClick={handleLinkClick}>
						<Link href="/contacts">CONTACTS</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
