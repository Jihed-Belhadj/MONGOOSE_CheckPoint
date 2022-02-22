const express = require("express");
const { addBook, getAllBooks, deleteBook, getOneBook, updateBook, getBooksByTitleCriterea } = require("../controllers/bookController");
const router=express.Router();


//url /api/books/test
/* router.get('/test',(req,res)=>{
    res.send('HELLO')
}) */

//add new book
//POST

router.post('/',addBook)

//get all books
//GET

router.get('/', getAllBooks)

//get books by criterea
//GET

router.get('/title/:bookCriteria',getBooksByTitleCriterea) 

// get one book
//GET

router.get('/:bookId', getOneBook)

//delete a book
//DELETE

router.delete('/:bookId', deleteBook)


//update a book
//PUT

router.put('/:bookId', updateBook)


module.exports=router