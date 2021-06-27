import { useRouter } from "next/router";
import ProjectCard from "../../modules/ProjectCard";
import Control from "../../modules/Control";
import Counter from "../../modules/Counter";
import styles from "../../styles/Projects.module.css";
import getBluredPlaceholder from "../../utils/getBluredPlaceholder";

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
				<Control handleClick={handleArrowClick}>
					<Counter current={currentPage} total={totalPages} />
				</Control>
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
	const { projects: p } = await import("../api/db.json");
	const { page } = params;

	const totalPages = Math.ceil(p.length / 3);

	let projects = p.slice((Number(page) - 1) * 3);
	if (projects.length > 3) projects = projects.slice(0, 3);

	const pageProjects = await Promise.all(
		projects.map(async project => {
			const images = await getBluredPlaceholder(project);
			return {
				...project,
				images,
			};
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
