const userModel = require('../models/userModel')

const createUser = async (req, res) => {
    let data = req.body
    const isFree = req.headers//["isfreeappuser"]

    if (isFree.isfreeappuser === 'true') data.isFreeAppUser = true
    else data.isFreeAppUser = false

    const savedData = await userModel.create(data)
    res.send({ msg: savedData })

    //res.send(data)
}

module.exports.createUser = createUser