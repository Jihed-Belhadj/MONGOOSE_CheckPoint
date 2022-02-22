const { type } = require("express/lib/response");
const mongoose= require("mongoose");
const schema=mongoose.Schema

const bookSchema= new schema({
    title:{
        type:String,required:true
    },
    author:{
        type:String,required:true
    },
    category:{
        type:String
    },
    year:{
        type:Number
    },
    cost:{
        type:Number,required:true
    },
    isbn:{
        type:String,required:true,unique:true
    }

})

module.exports=mongoose.model('Book',bookSchema)
