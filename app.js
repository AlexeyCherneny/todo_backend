const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const task = require("./routes/task.route");

const port = 3001;
const dev_db_url =
  "mongodb://niceman:123Password@ds155833.mlab.com:55833/todos";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/todosApi_1.0/tasks", task);

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
