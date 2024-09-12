
const express = require("express");
const cors = require('cors');

const usersController = require("./controllers/users-controller");

const server = express();

// server.use(cors({ origin: "http://localhost:3000"}));
//server.use(loginFilter());
server.use(express.json());
server.use("/users", usersController);


//server.use(exceptionHandler)


server.listen(5000, () => console.log("Listening on http://localhost:5000"));