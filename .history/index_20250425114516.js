const express = require("express")

const app = express()

const PORT = 4000


app.listen(PORT,(err) =>{
    if(!err){
        console.log("The server is runing on the Port :",PORT)
    }
})

app.get('/',(req,res) =>{
    res.json({
        message:"Book fetched"
    })
})

app.post('/',(req,res) =>{
    res.json({
        message:"Book created"
    })
})

app.patch("/")