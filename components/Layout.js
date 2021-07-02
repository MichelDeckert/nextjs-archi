import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* const STATIC_PAGES = {
	HOME: { name: "Accueil", pathname: "/" },
	PROJECTS:{ name: "Projets", pathname: "/projects"},
	GALLERY: {name: "Galerie", pathname: "/gallery"},
	CERTIFICATS:{name: "Certificats", pathname: "/certificats"},
	CONTACTS: {name: "Contacts", pathname: "/contacts"},
}; */
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

	return (
		<>
			<Head>
				<title>{`Digital Project | ${pageTitle}`}</title>
			</Head>
			<div className="app">
				<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				<div ref={content} className="content">
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
}
