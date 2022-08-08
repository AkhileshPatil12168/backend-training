const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})


//first problem
router.get('/GET/movies', function (req, res){
    let movies=['KGF Chapter 2', 'Pawankhind', 'A Quiet Place part 2','Eternals']
    res.send(movies)
})


//second problem
router.get('/GET/movies/:i', function (req, res){
    let movies=['KGF Chapter 2', 'Pawankhind', 'A Quiet Place part 2','Eternals']
    
    let requestParams = req.params  //  
    let value=Object.values(requestParams)   
    res.send(movies[value])      
})

//third problem
router.get('/GET/movie/:i', function (req, res){
    let movies=['KGF Chapter 2', 'Pawankhind', 'A Quiet Place part 2','Eternals']
    
    let requestParams = req.params  //
    
    let value=Object.values(requestParams)
    
    if(value > movies.length ||  value == movies.length){
        res.send("enter valid index number")
    }else{
    res.send(movies[value])
    }    
})


//forth problem
router.get('/GET/films', function (req, res){
    let movies=[{'id': 1, 'name':'KGF Chapter 2' }, {'id': 2, 'name':'Pawankhind' }, 
    {'id': 1, 'name':'A Quiet Place part 2' }, {'id': 1, 'name':'Eternals' }]  
     res.send(movies) 
})


//fifth problem
router.get('/GET/films/:filmId', function(req,res){
    let movies=[{'id': 1, 'name':'KGF Chapter 2' }, {'id': 2, 'name':'Pawankhind' }, 
    {'id': 3, 'name':'A Quiet Place part 2' }, {'id': 4, 'name':'Eternals' }]
    
    let value = req.params.filmId 

    if(value > movies.length ){
        res.send("No movie exists with this id")
    }else{
    res.send(movies[value-1])
    } 
})

module.exports = router;