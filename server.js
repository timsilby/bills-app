require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Set up express
const app = express();

// Set up logger
app.use(logger("dev"));

// Set up express middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set up static directory
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Import routes
// app.use(require("./routes/API.js"));

// Send all requests to the react app.
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true
})
	.then(conn => console.log(`Connected to ${conn.connections[0].host}.`))
	.catch(err => console.log(err));

// Start the server
app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}.`);
});