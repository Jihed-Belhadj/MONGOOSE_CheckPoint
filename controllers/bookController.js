const Book = require("../models/Book");

const addBook=async (req,res)=>{
    const {title,author,category,year,cost,isbn}=req.body;
    try {
        const book= new Book({title,author,category,year,cost,isbn});
        await book.save();
        res.send({msg:'book added', book})
    } catch (error) {
        res.status(500).send('server error')
    }
}

const getAllBooks=async (req,res)=>{
    try {
        const books= await Book.find()
        res.send(books) 
    } catch (error) {
        res.status(500).send('server error')
    }
}

const getBooksByTitleCriterea=async (req,res)=>{
    const {bookCriteria}=req.params
    try {
        const books= await Book.find({title:{$regex:bookCriteria.toLowerCase()}})
        res.send(books) 
    } catch (error) {
        res.status(500).send('server error')
    }
}

const getOneBook=async(req,res)=>{
    const {bookId}=req.params
    try {
        const book= await Book.findById(bookId)
        res.send(book)
    } catch (error) {
        res.status(500).send('server error')
    }
}

const deleteBook=async(req,res)=>{
    const {bookId}=req.params
    try {
        await Book.findByIdAndDelete(bookId)
        res.send('book deleted')
    } catch (error) {
        res.status(500).send('server error')
    }
}

const updateBook=async(req,res)=>{
    const {bookId}=req.params
    try {
        await Book.findByIdAndUpdate(bookId,{$set:{...req.body}})
        res.send({msg:'book updated'})
    } catch (error) {
        res.status(500).send('server error')
    }
}

module.exports={addBook, getAllBooks, getOneBook, deleteBook, updateBook,getBooksByTitleCriterea}