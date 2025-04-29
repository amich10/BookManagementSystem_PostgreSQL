const express = require("express")

const app = express()

const PORT = 4000


app.listen(PORT,(err) =>{
    if(!err){
        console.log("The server is runing on the Port :",)
    }
})

app.get('/',(req,res) =>{
    res.json({
        message:"Book fetched"
    })
})