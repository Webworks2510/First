const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");

const db = mysql.createConnection({
	host: bn26fvsk0hn87edanoym - mysql.services.clever - cloud.com, // Replace with your database hostname
	user: umgfjp60t6onhv3z, // Replace with your database username
	password: oWzpM9hWP6f4OMT12B7J, // Replace with your database password
	database: bn26fvsk0hn87edanoym, // Replace with your database name
});

app.get("/checking", (req, res) => {
	res.status(200).json("Welcome, your app is working well");
});
app.get("/doublecheck", (req, res) => {
	res.status(200).json("Welcome, your app is working well now also");
});
app.get("/user", (req, res) => {
	const sql = "SELECT * FROM USER";
	db.query(sql, (err, data) => {
		if (err) res.json(err);
		return res.json(data);
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
