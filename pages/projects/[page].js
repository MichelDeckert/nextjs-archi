import { useRouter } from "next/router";
import ProjectCard from "../../modules/ProjectCard";
import Control from "../../modules/Control";
import Counter from "../../modules/Counter";
import styles from "../../styles/Projects.module.css";

export default function Projects({ projects, currentPage, totalPages }) {
	const router = useRouter();

	function handleArrowClick(direction) {
		const path = "/projects/";
		if (direction === "right") {
			if (currentPage === totalPages) router.push(`${path}1`);
			else router.push(`${path}${currentPage + 1}`);
		} else if (direction === "left") {
			if (currentPage === 1) router.push(`${path}${totalPages}`);
			else router.push(`${path}${currentPage - 1}`);
		}
	}

	return (
		<div className={styles.projects}>
			<h1 className={`${styles.title} secondary-title`}>Nos Projets</h1>
			<div className={styles.projects_container}>
				{projects.map((project, id) => (
					<ProjectCard
						project={project}
						key={id}
						last={id === projects.length - 1}
					/>
				))}
			</div>
			<div className={styles.controllers}>
				<Counter current={currentPage} total={totalPages} />
				<Control handleClick={handleArrowClick} />
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { projects } = await import("../api/db.json");

	const pages = Math.ceil(projects.length / 3);

	let paths = [];

	for (let i = 1; i <= pages; i++) {
		paths.push({ params: { page: i.toString() } });
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { projects } = await import("../api/db.json");
	const { page } = params;

	const totalPages = Math.ceil(projects.length / 3);

	let pageProjects = projects.slice((Number(page) - 1) * 3);
	if (pageProjects.length > 3) pageProjects = pageProjects.slice(0, 3);

	pageProjects = pageProjects.map(
		({ name, city, description, images, id }) => ({
			name,
			city,
			description,
			id,
			imagePath: images[0].path,
		})
	);

	return {
		props: {
			currentPage: Number(page),
			projects: pageProjects,
			totalPages,
		},
	};
}
