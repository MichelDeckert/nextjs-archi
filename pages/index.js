import getBluredPlaceholder from "../utils/getBluredPlaceholder";
import Hero from "../components/index/Hero";
import About from "../components/index/About";
import Goals from "../components/index/Goals";
import Projects from "../components/index/Projects";
import Form from "../components/index/Form";

export default function Home({ projects }) {
	return (
		<>
			<Hero
				projects={projects.filter(project => project.showcased === "HERO")}
			/>
			<About />
			<Goals />
			<Projects
				projects={projects
					.filter(project => project.showcased === "PROJECTS")
					.slice(0, 5)}
			/>
			<Form />
		</>
	);
}

export async function getStaticProps() {
	const { projects: p } = await import("./api/db.json");

	const projects = await Promise.all(
		p.map(async project => {
			const images = await getBluredPlaceholder(project);
			return {
				...project,
				images,
			};
		})
	);

	return {
		props: {
			projects,
		},
	};
}
