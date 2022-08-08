const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const welcome = require('../logger/logger')
const dateMonthInfo = require('../util/helper')
const formatter=require('../validator/formatter')

const _=require('lodash')


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

    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result= _.chunk(months,4)
    console.log(result)
    console.log("")

    let odd=[1,3,5,7,9,11,13,15,17,19];
    let oddresult=_.tail(odd)
    console.log(oddresult)
    console.log("")

    let arr=[1,2,3,3,5,66,777,777,8,3,4,1,2,8,];
    let unionarr=_.union(arr)
    console.log(unionarr)
    console.log("")

    let numWord=[['one',1],['two',2],['three',3],['four',4]];
    let nWresult=_.fromPairs(numWord)
    console.log(nWresult)


});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason