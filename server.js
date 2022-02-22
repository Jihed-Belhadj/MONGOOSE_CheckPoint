const express = require("express");
const connectDB=require('./config/db')
const bookRouter=require('./routes/book')


const app=express();

//connection to database
connectDB();

//middlware
app.use(express.json())

//routes
app.use('/api/books', bookRouter)

const port= 5000;

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
});