require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log("Database error: ", error));

db.once("open", () => console.log("Database connected"));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template engine
app.set("view engine", "ejs");

// Routes
const routes = require("./routes/routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
