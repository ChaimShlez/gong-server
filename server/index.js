
const express = require("express");
const cors = require('cors');
const usersController = require("./controllers/users-controller");
const logsController = require("./controllers/logs-controller");
const categoriesController = require("./controllers/categories-controller");
const incomesController = require("./controllers/incomes-controller");
const server = express();
const checkAuthorizationMiddleware = require("./middleware/checkAuthorization");


server.use(cors());
server.use(express.json());



server.use("/users", usersController);
server.use(checkAuthorizationMiddleware.checkAuthorization);
server.use("/logs", logsController);
server.use("/categories",categoriesController);
server.use("/income",incomesController);

//server.use(exceptionHandler)


server.listen(process.env.REST_API_PORT, () => console.log(`Listening on ${process.env.REST_API_PORT}`));