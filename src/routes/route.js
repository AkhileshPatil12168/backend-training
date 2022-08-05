const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const welcome = require('../logger/logger')
const dateMonthInfo = require('../util/helper')
const formatter=require('../validator/formatter')


router.get('/test-me', function (req, res) {

    abc.printName()
    welcome.welcome()
    console.log("")

    dateMonthInfo.printDate()
    dateMonthInfo.printMonth()
    dateMonthInfo.getBachInfo()
    console.log("")

    formatter.printTrim()
    formatter.printLow()
    formatter.printHigh()
    
    res.send('hello, my name is akhilesh.')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason