const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers')

//1st
router.post('/createBook', controller.createBook )
router.post('/createAuthor', controller.creatAuthor)

//2nd
router.get('/byAuthorId', controller.byAuthorId)

//3rd
router.get('/updatePrize', controller.towStates)

//4th
router.get('/bookinfo', controller.bookrange)



module.exports = router;