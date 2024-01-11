const express = require('express')
const router = express.Router()

router.get('/fetch',(request, response) =>{
    const {name, age, gender} = request.query 

    if (Number(age) === 23) {
        response.status(200).send({
            name,
            age,
            gender
        })
    } else {
        response.status(500).send({
            "message": "Age is Incorrect",
            "status" : "Failed!"
        })
    }
    //response.send(request.query)
    //console.log(request.body)
})

router.post('/insert',(request, response) =>{
    //response.json({
    //"message" : "Success!"
     console.log(request.body)
})

module.exports = router