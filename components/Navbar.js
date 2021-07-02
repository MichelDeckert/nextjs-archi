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
					<li
						onClick={handleLinkClick}
						className={router.pathname === "/" ? styles.active : ""}>
						<Link href="/">ACCUEIL</Link>
					</li>
					<li
						onClick={handleLinkClick}
						className={router.pathname === "/gallery" ? styles.active : ""}>
						<Link href="/gallery">GALERIE</Link>
					</li>
					<li
						onClick={handleLinkClick}
						className={
							router.pathname.match(/^\/projects*/) ? styles.active : ""
						}>
						<Link href="/projects/1">PROJETS</Link>
					</li>
					<li
						onClick={handleLinkClick}
						className={router.pathname === "/certificats" ? styles.active : ""}>
						<Link href="/certificats">CERTIFICATS</Link>
					</li>
					<li
						onClick={handleLinkClick}
						className={router.pathname === "/contacts" ? styles.active : ""}>
						<Link href="/contacts">CONTACTS</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
