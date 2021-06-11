import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Goals from "../components/Goals";

export default function Home() {
	return (
		<>
			<Head>
				<title>Digital Project</title>
			</Head>
			<Hero />
			<About />
			<Goals />
		</>
	);
}
