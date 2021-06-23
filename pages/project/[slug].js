import slugify from "../../utils/slugify";

export default function Project({ project, id }) {
	return <div>{project.name}</div>;
}

export async function getStaticPaths() {
	const { projects } = await import("../api/db.json");

	const paths = projects.map(({ name, city, id }) => ({
		params: { slug: slugify(id, name, city) },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(ctx) {
	const { projects } = await import("../api/db.json");
	const idx = Number(ctx.params.slug.split("-")[0]);

	const project = projects.find(({ id }) => idx === id);

	return {
		props: {
			project,
		},
	};
}
