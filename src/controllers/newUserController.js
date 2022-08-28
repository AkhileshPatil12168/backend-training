const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send(savedData);
};

const loginUser = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const data = await userModel.findOne({ emailId: email, password: password })
  if (!data) return res.send("email or password is worng......")

  const token = jwt.sign({ userId: data._id.toString() }, "asdf-qwer-xfsdfgf-aaasdfaa-656-nnun")
  res.setHeader("x-auth-token", token)
  res.send({ status: true, token: token })

}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBhMTRkNGUzYTgyNjdmNDY5ZWYzYmIiLCJpYXQiOjE2NjE2MDg2MzB9.SExQgWKqn631EF8BcozJAF4fXDKSQSIWJCGuyd0eXmU

const checkToken = async (req, res) => {

  const userId = req.params.userId

  const data = await userModel.findById(userId) 
  if (!data) return res.send("user not found")
  res.send(data)

}


const updatedUser = async (req, res) => {

  const userId = req.params.userId

  const data = await userModel.findByIdAndUpdate(userId, { $set: req.body }, { new: true })
  if (!data) return res.send("user not found")
  res.send(data)

}

const deleteUser = async (req, res) => {

  const userId = req.params.userId

  const data = await userModel.findByIdAndUpdate(userId, { $set: { isDeleted: true } })
  if (!data) return res.send("user not found")
  res.send("user is deleted..........")

}


module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.checkToken = checkToken
module.exports.updatedUser = updatedUser
module.exports.deleteUser = deleteUser