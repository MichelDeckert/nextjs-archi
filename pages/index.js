import Head from "next/head";
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Goals from "../components/index/Goals";
import Projects from "../components/index/Projects";
import Form from "../components/index/Form";

export default function Home({ projects }) {
	return (
		<>
			<Head>
				<title>Digital Project</title>
			</Head>
			<Hero projects={projects} />
			<About />
			<Goals />
			<Projects />
			<Form />
		</>
	);
}

export async function getStaticProps() {
	const data = await import("./api/db.json");

	return {
		props: {
			projects: data.projects,
		},
	};
}
