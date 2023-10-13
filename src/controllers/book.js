const { Book } = require("../models");
const createBook = async (req, res) => {
  const { title, author, price, language, published_date } = req.body;
  try {
    if (!title) {
      return res.status(404).json({ message: "Required field!" });
    }
    const book = await Book.create({
      title,
      author,
      price,
      language,
      published_date,
      status: req.body.status ? req.body.status : false,
    });
    return res.json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: "student",
    });
    return res.json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
      include: "student",
    });
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({
      where: { id },
    });
    await book.destroy();
    return res.json({ message: "Book deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.update(req.body, {
      where: { id },
    });
    return res.json({ message: "Book updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
