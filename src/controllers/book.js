const Book = require("../models/Books.js");
const User = require("../models/Books.js");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ books: books });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const getBookID = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id).populate("owners", "-_id -__v -books");
    return res.status(200).json({ book: book });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const postBook = async (req, res) => {
  const book = req.body;
  try {
    const bookCreated = await Book.create(book);
    return res.status(201).json({ bookCreated: bookCreated });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

const putBook = async (req, res) => {
  const { idBook } = req.params;
  const { idUser } = req.params;
  const book = req.body;
  if (!idUser) {
    try {
      const bookUpdated = await Book.updateOne({ _id: idBook }, { $set: book });
      return res.status(201).json({ bookUpdated: bookUpdated });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  } else {
    try {
      const bookUpdated = await Book.findByIdAndUpdate(
        idBook,
        { $push: { owners: idUser } },
        { new: true, useFindAndModify: false }
      );
      return res.status(201).json({ bookUpdated: bookUpdated });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const bookDeleted = await Book.deleteOne({ _id: id });
    return res.status(201).json({ bookDeleted: bookDeleted });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = {
  getBooks,
  getBookID,
  postBook,
  putBook,
  deleteBook,
};
