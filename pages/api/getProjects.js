const db = require("./db.json");

export default function getProjects(req, res) {
	res.status(200).json(db.projects);
}
