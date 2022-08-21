const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')
const authorController = require('../controllers/authorController')
const publisherController = require('../controllers/publisherController')



router.post("/createAuthor", authorController.createAuthor)
router.post('/createPublisher', publisherController.createPublisher)
router.post("/createBook", bookController.createBook)

router.get("/poulateBooksData", bookController.poulateBooksData)

router.put("/addNewKey", bookController.addKey)
router.put("/priceIncrese", bookController.priceIncrese)


module.exports = router;