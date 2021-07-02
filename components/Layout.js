import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const STATIC_PAGES = {
	Home: "Accueil",
	Projects: "Projets",
	Gallery: "Galerie",
	Certificats: "Certificats",
	Contacts: "Contacts",
};

export default function Layout({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState("");
	const content = useRef();

	useEffect(() => {
		console.log(children);
		if (Object.keys(STATIC_PAGES).includes(children.type.name)) {
			setPageTitle(STATIC_PAGES[children.type.name]);
		} else if (children.type.name === "Project") {
			setPageTitle(children.props.project.name);
		}
	}, [children]);

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
