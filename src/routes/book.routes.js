const express = require("express");
const {
  getBooks,
  getBookID,
  postBook,
  putBook,
  deleteBook,
} = require("../controllers/book.js");

const router = express.Router();

//(GET)-books/:id
router.get("/:id", getBookID);

//(GET)-books/
router.get("/", getBooks);

//(POST)-books
router.post("/", postBook);

//(PUT)-books/:id
router.put("/:idBook/", putBook);

//(PUT)-books/:id/:id
router.put("/:idBook/:idUser", putBook);

//(DELETE)-books/:id
router.delete("/:id", deleteBook);

module.exports = router;
