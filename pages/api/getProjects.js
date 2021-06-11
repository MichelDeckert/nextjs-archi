const db = require("./db.json");

export default (req, res) => {
	res.status(200).json(db.projects);
};
