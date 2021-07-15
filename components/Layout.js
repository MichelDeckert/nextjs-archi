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

	const getPageTitle = pathname => {
		const pageName = `/${pathname.split("/")[1]}`;

		if (Object.values(STATIC_PAGES).includes(pageName)) {
			return Object.keys(STATIC_PAGES).find(
				key => STATIC_PAGES[key] === pageName
			);
		}

		return router.query.slug
			.split("-")
			.slice(1)
			.map(word => word.replace(/^\w/, letter => letter.toUpperCase()))
			.join(" ");
	};

	useEffect(() => {
		setPageTitle(getPageTitle(router.pathname));
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
				<meta
					name="description"
					content="Faux site d'une agence d'architecture fait avec Next.js"
				/>
				<meta charSet="utf-8" />
				{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
				<link
					rel="shortcut icon"
					type="image/xml+svg"
					href={systemTheme === "light" ? "/favicon.svg" : "/favicon-dark.svg"}
				/>
				<meta property="og:title" content="Digital Project" key="ogtitle" />
				<meta
					property="og:description"
					content="Faux site d'une agence d'architecture fait avec Next.js"
					key="ogdesc"
				/>
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
