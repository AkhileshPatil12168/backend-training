const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})




//first problem
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
        }
    ]



router.post("/players", function(req, res){
    let newPlayer=req.body
    let name=newPlayer.name
    //console.log(name)
    //res.send(players)
    for(i=0; i<players.length; i++){
        if(players[i].name ==name){
           return res.send("player alredy exits.")
        }
    }players.push(newPlayer)
    return res.send(players) 
    
})

//problem two(optional)

let playersId =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "BookingId" : {
            "bookingNumber": 1,
             "sportId" : "",
             "centerId"  : "" ,
            "type": "private",
            "slot": '16286598000000',
            "bookedOn": '31/08/2021',
            "bookedFor": '01/09/2021'
           }
           
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"],
           "BookingId" : {
            "bookingNumber": 2,
             "sportId" : "",
             "centerId"  : "" ,
            "type": "private",
            "slot": '16286598000000',
            "bookedOn": '31/08/2021',
            "bookedFor": '01/09/2021'
           }
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "BookingId" : []
        },
        {
            "name": "akhilesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
            "BookingId" : []
         },
         {
            "name": "raj",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
            "BookingId" : []
         }
    ]


    router.post('/players/:playerName/bookings/:bookingId', function(req, res){
        let name=req.params.playerName
        let bookingIdNumber=req.params.bookingId
        let newBooking=req.body

        for (let i=0; i<playersId.length; i++){
            if(playersId[i].name==name){
                
                if(playersId[i].BookingId !==[] && playersId[i].BookingId.bookingNumber==bookingIdNumber ){
                    return res.send('booking id exists.')
                }
                if(playersId[i].BookingId ==""){
                    playersId[i].BookingId.push(newBooking)
                    //console.log(playersId)
                    return res.send(playersId)
                }
                
            }
            //console.log(playersId)
        }return res.send('player does not exists.')

    })


//Post API Assignment 2 voting
    let persons=[
        {
            "name": "raj",
            "age": 18,
            "votingStatus": false
        },

        {
            "name": "sunil",
            "age": 57,
            "votingStatus": false
        },

        {
            "name":"sanket",
            "age":24,
            "votingStatus":false
        },

        {
            "name":"pratik",
            "age":15,
            "votingStatus":false
        },

        {
            "name":"vedant",
            "age":13,
            "votingStatus":false
        }

    ]

    router.post('/voting', function(req, res){
        let age=req.query.age
        
        let elegiPerson=[]
        for (let i=0; i<persons.length; i++){
            if(persons[i].age>=age){
                persons[i].votingStatus=true
                elegiPerson.push(persons[i])
            }
        }if(elegiPerson.length==0){
            return res.send('No data to show.')
        }else{
        return res.send(elegiPerson)
        }
    })


module.exports = router;