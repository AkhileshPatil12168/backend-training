const jwt = require('jsonwebtoken')

const mid1 = (req, res, next) => {
    try {
        const token = req.headers["x-auth-token"]
        const userId = req.params.userId

        if (!token) return res.status(401).send({ status: false, msg: "Unauthorized" })  //using for authentication

        const tokenValidator = jwt.verify(token, "asdf-qwer-xfsdfgf-aaasdfaa-656-nnun")
        console.log(tokenValidator)
        if (tokenValidator.userId != userId) return res.status(403).send({ status: false, msg:"Forbidden"})

        next()
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

module.exports.mid1 = mid1