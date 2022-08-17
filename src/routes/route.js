const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController')

router.post('/createBook', bookController.createBook);
router.get('/bookList', bookController.bookList);
router.post('/getBooksInYear', bookController.BooksByYear);
router.post('/getParticularBooks', bookController.particularBooks);
router.get('/getXINRBooks', bookController.bookINR);
router.get('/getRandomBooks', bookController.RandomBooks);

module.exports = router;