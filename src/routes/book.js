const express = require("express")
const router =express.Router()
const {createBook,getAllBooks,getBookById,deleteBook,updateBook } = require("../controllers/book")

router.post("/createBook",createBook)
router.get("/getBooks",getAllBooks)
router.get("/getBook/:id",getBookById)
router.delete("/deleteBook/:id",deleteBook)
router.put("/updateBook/:id",updateBook)

module.exports=router;