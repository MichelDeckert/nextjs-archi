import { useState } from "react";
import Head from "next/head";
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Goals from "../components/index/Goals";
import Projects from "../components/index/Projects";
import Form from "../components/index/Form";
import Loader from "../components/Loader";

export default function Home({ projects }) {
	const [isLoading, setIsLoading] = useState(true);

	return (<>
			<Head>
				<title>Digital Project</title>
			</Head>
			{isLoading ? <Loader /> : <>
			<Hero
				projects={projects.filter(project => project.showcased === "HERO")}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
			<About />
			<Goals />
			<Projects
				projects={projects
					.filter(project => project.showcased === "PROJECTS")
					.slice(0, 5)}
			/>
			<Form /></>
			)}
		</>
		/*<>
			<Head>
				<title>Digital Project</title>
			</Head>
			{isLoading && <Loader />}
			<Hero
				projects={projects.filter(project => project.showcased === "HERO")}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
			{!isLoading && (
				<>
					<About />
					<Goals />
					<Projects
						projects={projects
							.filter(project => project.showcased === "PROJECTS")
							.slice(0, 5)}
					/>
					<Form />
				</>
			)}
		</>*/
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
