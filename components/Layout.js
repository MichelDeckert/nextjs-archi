import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const content = useRef();

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
				<title>Digital Project</title>
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
