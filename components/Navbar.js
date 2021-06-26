import { useRouter } from "next/dist/client/router";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

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
					<li onClick={handleMenuClick}>
						<Link href="/">ACCUEIL</Link>
					</li>
					<li onClick={handleMenuClick}>
						<Link href="/gallery">GALERIE</Link>
					</li>
					<li onClick={handleMenuClick}>
						<Link href="/projects/1">PROJETS</Link>
					</li>
					<li onClick={handleMenuClick}>
						<Link href="/certificats">CERTIFICATS</Link>
					</li>
					<li onClick={handleMenuClick}>
						<Link href="/contacts">CONTACTS</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
