const express = require("express");
const UserRouter = require("./user.routes.js");
const BookRouter = require("./book.routes.js");

const router = express.Router();

//(ROUTES)
//        -users
router.use("/users", UserRouter);
//        -books
router.use("/books", BookRouter);

module.exports = router;
