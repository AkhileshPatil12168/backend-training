const publisherModel = require('../models/publisherModel')


const createPublisher = async (req, res) => {
    let publisher = req.body;
    let publisherCreated = await publisherModel.create(publisher)
    res.send(publisherCreated)
}


module.exports.createPublisher = createPublisher;