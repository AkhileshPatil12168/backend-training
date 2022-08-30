const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send(savedData);
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password

    const data = await userModel.findOne({ emailId: email, password: password })
    if (!data) return res.status(404).send("email or password is worng......")

    const token = jwt.sign({ userId: data._id.toString() }, "asdf-qwer-xfsdfgf-aaasdfaa-656-nnun")
    res.setHeader("x-auth-token", token)
    res.status(201).send({ status: true, token: token })
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(502).send({ msg: "Error", error: err.message })

  }

}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBhMTRkNGUzYTgyNjdmNDY5ZWYzYmIiLCJpYXQiOjE2NjE2MDg2MzB9.SExQgWKqn631EF8BcozJAF4fXDKSQSIWJCGuyd0eXmU
const checkToken = async (req, res) => {
  try {
    const userId = req.params.userId

    const data = await userModel.findById(userId)
    if (!data) return res.status(404).send("user not found")
    res.status(302).send(data)
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

}


const updatedUser = async (req, res) => {
  try {
    const userId = req.params.userId

    const data = await userModel.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
    if (!data) return res.status(400).send("user not found")
    res.status(202).send(data)
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId

    const data = await userModel.findByIdAndUpdate(userId, { $set: { isDeleted: true } })
    if (!data) return res.status(403).send("user not found")
    res.status(202).send("user is deleted..........")
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

}


module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.checkToken = checkToken
module.exports.updatedUser = updatedUser
module.exports.deleteUser = deleteUser