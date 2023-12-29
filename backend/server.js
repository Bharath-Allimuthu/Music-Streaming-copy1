require("dotenv").config();

const express = require('express');
const app = express();

const mongoose = require("mongoose");

const connectwithDB = require("./config/mongoDBConn");

const defaultPort = 8080;
const PORT =process.env.PORT || defaultPort;


require("express-async-errors");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

connectwithDB();

mongoose.connection.once("open", () => {
    console.log("Hurray!!! Connected to DB!!!");
     app.listen(PORT, () => {
      console.log(`---Project Dashboard Listening to ${PORT}---`);
       });
});

mongoose.connection.on("err", (err) => {
    logError(err);
})