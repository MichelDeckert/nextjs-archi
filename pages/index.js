import Head from "next/head";
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Goals from "../components/index/Goals";
import Projects from "../components/index/Projects";
import Form from "../components/index/Form";

export default function Home() {
	return (
		<>
			<Head>
				<title>Digital Project</title>
			</Head>
			<Hero />
			<About />
			<Goals />
			<Projects />
			<Form />
		</>
	);
}
