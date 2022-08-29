const jwt = require('jsonwebtoken')

const mid1 = (req, res, next) => {
    const token = req.headers["x-auth-token"]
    const userId = req.params.userId

    if (!token) return res.send({ status: false, mes: "token is requried" })

    const tokenValidator = jwt.verify(token, "asdf-qwer-xfsdfgf-aaasdfaa-656-nnun")
    console.log(tokenValidator)
    if (tokenValidator.userId != userId) return res.send("token or user is invalid")

    next()
}

module.exports.mid1 = mid1