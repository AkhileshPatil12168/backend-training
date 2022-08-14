const bookModel=require('../models/bookModel');

const creatBookInfo = async  (req, res)=>{
    let data= req.body
    let bookData= await bookModel.create(data)
    res.send({bookData})
}

const getBookInfo = async  (req, res) => {
    let bookData= await bookModel.find()
    res.send({bookData})
}

module.exports.creatBookInfo = creatBookInfo;
module.exports.getBookInfo = getBookInfo;