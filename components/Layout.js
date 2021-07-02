import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";

const STATIC_PAGES = {
	Accueil: "/",
	Projets: "/projects",
	Galerie: "/gallery",
	Certificats: "/certificats",
	Contacts: "/contacts",
};

export default function Layout({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState("");
	const { systemTheme } = useTheme();
	const router = useRouter();
	const content = useRef();

	const changePageTitle = path => {
		if (Object.values(STATIC_PAGES).includes(path)) {
			const title = Object.keys(STATIC_PAGES).find(
				key => STATIC_PAGES[key] === path
			);
			setPageTitle(title);
		} else {
			setPageTitle(
				router.query.slug
					.split("-")
					.slice(1)
					.map(word => {
						let newWord = word.split("");
						newWord[0] = newWord[0].toUpperCase();
						return newWord.join("");
					})
					.join(" ")
			);
		}
	};

	useEffect(() => {
		changePageTitle(router.pathname);
	}, [router.pathname]);

	useEffect(() => {
		if (isMenuOpen) {
			document.querySelector("body").classList.add("noscroll");
		} else if (!isMenuOpen) {
			document.querySelector("body").classList.remove("noscroll");
		}
	}, [isMenuOpen]);

	useEffect(() => {
		console.log(systemTheme);
	}, [systemTheme]);

	return (
		<html lang="fr">
			<Head>
				<title>{`Digital Project | ${pageTitle}`}</title>
				<meta
					name="description"
					content="Fake architecture agency website project build with Next.js"
				/>
				<link
					rel="shortcut icon"
					type="image/xml+svg"
					href={systemTheme === "light" ? "/favicon.svg" : "/favicon-dark.svg"}
				/>
			</Head>
			<div className="app">
				<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				<div ref={content} className="content">
					{children}
				</div>
				<Footer />
			</div>
		</html>
	);
}
