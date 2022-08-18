const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')

//1st
const createBook=async (req, res) =>{
    let data=req.body
    let bookData= await bookModel.create(data)
    res.send(bookData)
}

const creatAuthor=async (req, res)=>{
    let data=req.body
    let authorData= await authorModel.create(data)
    res.send(authorData)
}


//2nd
const byAuthorId=async (req, res)=>{
    let data=await authorModel.find({author_name : "Chetan Bhagat"}) 
    let book=await bookModel.find({author_id :{$eq : data[0].author_id }})
    res.send({book})
}

//3rd

const towStates=async (req, res)=>{
    let book=await bookModel.findOneAndUpdate({name : "Two states"}, {$set :{price : 800}}, {new : true});
    let price=book.price;
    
    let authorname= await authorModel.find({author_id:{$eq : book.author_id}}).select({author_name:1, _id :0})
    res.send({authorname, price});
} 

//4th
const bookrange=async (req, res)=>{
let bookprice=await bookModel.find({price : {$gte : 50, $lte:100}})
let a= bookprice.map(x=>x.author_id)
let data= await authorModel.find({author_id : a}).select({author_name:1, _id:0})
res.send(data)

}

module.exports.createBook=createBook
module.exports.creatAuthor=creatAuthor
module.exports.byAuthorId=byAuthorId
module.exports.towStates=towStates
module.exports.bookrange=bookrange


