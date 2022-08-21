const publisherModel = require('../models/publisherModel')
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const mongoose = require('mongoose')

//3rd
const createBook = async (req, res) =>{

    let book = req.body
    let checkAuthor = mongoose.Types.ObjectId.isValid(book.author_id)
    let checkPublisher = mongoose.Types.ObjectId.isValid(book.publisher)

    console.log(checkAuthor)
    console.log(checkPublisher)

    //3.a and 3.b
    if (!book.author_id) return res.send("author_id is not writen")
    else if (checkAuthor == false) return res.send("author_id is incorrect")
    let authorId = await authorModel.findById(book.author_id)
    if (authorId == null) return res.send("author not found")

    //3.c and 3.d
    if (!book.publisher) return res.send("publisher is not writen")
    else if (checkPublisher == false) return res.send("publisher_id is incorrect")
    let publisherId = await publisherModel.findById(book.publisher)
    if (publisherId == null) return res.send("publisher not found")

    let bookCreated = await bookModel.create(book)
    res.send(bookCreated)

}

//4th
let poulateBooksData= async (req, res) =>{
    let booksData= await bookModel.find().populate(["author_id", "publisher"])
    res.send(booksData)
}

//5.a
const addKey=async (req,res)=>{
    const publisher=req.body
    const name=publisher.name
   const booksData= await bookModel.updateMany({$set : {isHardCover : 0}},{new:true})
    const publisherId=await publisherModel.find({ name: { $in: name } }).select({_id :1})
    const changeCover=await bookModel.find({publisher:{$in: publisherId}}).updateMany({$set : {isHardCover : true}})

    
    res.send(changeCover)
}

//5.b
const priceIncrese=async (req, res)=>{
    let authorId=await authorModel.find({rating : {$gt : 3.5}}).select({_id :1})
    let book=await bookModel.updateMany({author_id :{$in : authorId}},{$inc:{price : 15}})
    return res.send(book) 

}

 module.exports.createBook= createBook
 module.exports.poulateBooksData=poulateBooksData
 module.exports.addKey=addKey
 module.exports.priceIncrese=priceIncrese

