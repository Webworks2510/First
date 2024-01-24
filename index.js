const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");

const db = mysql.createConnection({
	host: "trial.ccqjtobabm3h.ap-south-1.rds.amazonaws.com", // Replace with your database hostname
	user: "admin", // Replace with your database username
	password: "rootroot", // Replace with your database password
	database: "main", // Replace with your database name
	reconnect: true,
});

app.get("/checking", (req, res) => {
	res.status(200).json("Welcome, your app is working well");
});
app.get("/doublecheck", (req, res) => {
	res.status(200).json("Welcome, your app is working well now also");
});
app.get("/user", (req, res) => {
	const sql = "SELECT * FROM user";
	db.query(sql, (err, data) => {
		if (err) {
			return res.status(500).json(err + " Due To Select");
		}
		return res.json(data);
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
