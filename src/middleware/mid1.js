const jwt= require('jsonwebtoken')

const mid1 = (req, res, next) => {
    const token = req.headers["x-auth-token"]

    if (!token) return res.send({ status: false, mes: "token is requried" })

    const tokenValidator = jwt.verify(token, "asdf-qwer-xfsdfgf-aaasdfaa-656-nnun")
    // const value=tokenValidator

    if (!tokenValidator) return res.send("token in invalid") 
    next() 
}
module.exports.mid1 = mid1