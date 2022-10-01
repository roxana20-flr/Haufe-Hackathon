
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios")

app.listen(3001, () => {
	console.log("Server started at port 3001");
});


app.get("/points", async (req, res) => {
	try {
		const response = await axios({
			url: "https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5",
			method: "get",
		});
		res.status(200).json(response.data.result.records);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


app.post("/async/post/", async (req, res) => {
	try {
		const response = await axios.post("posts", {
			title: "Foo",
			body: "bar",
			userID: 1
		});
		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});