const express = require("express");
const routes = require("./routes/index.routes.js");
const morgan = require("morgan");

const app = express();

//(MIDDLEWARES)
//(SHOW ROUTES)
app.use(morgan("dev"));
//(JSON)-parser
app.use(express.json());
//(ROUTES)
app.use("/", routes);

module.exports = app;
