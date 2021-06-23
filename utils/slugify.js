export default function slugify(id, name, city) {
	const slugName = name.toLowerCase().split(" ");
	const slugCity = city.toLowerCase().split(" ");

	return [id, ...slugName, ...slugCity].join("-");
}
