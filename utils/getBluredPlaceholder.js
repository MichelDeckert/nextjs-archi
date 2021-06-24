import { getPlaiceholder } from "plaiceholder";

export default function getBluredPlaceholder(project) {
	return Promise.all(
		project.images.map(async ({ path, horizontal, description }, id) => {
			const { base64, img } = await getPlaiceholder(path, { size: 64 });
			return {
				imageProps: { ...img, blurDataURL: base64 },
				alt: `${project.name}-${project.city}-${id + 1}`,
				horizontal,
				description,
			};
		})
	);
}
