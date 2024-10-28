
const express = require("express");
const cors = require('cors');
const loginFilter = require("./filters/login-filter");
const usersController = require("./controllers/users-controller");
const logsController = require("./controllers/logs-controller");
const categoriesController = require("./controllers/categories-controller");
const incomesController = require("./controllers/incomes-controller");
const server = express();



 server.use(cors({ origin: "http://localhost:3000"}));
//server.use(loginFilter());
//server.use(loginFilter());
server.use(express.json());
server.use("/users", usersController);
server.use("/logs", logsController);
server.use("/categories",categoriesController);
server.use("/income",incomesController);

//server.use(exceptionHandler)


server.listen(5000, () => console.log("Listening on http://localhost:5000"));