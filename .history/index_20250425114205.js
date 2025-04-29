const express = require("express")

const app = express()

const PORT = 4000


app.listen(PORT,(err) =>{
    
})

app.get('/',(req,res) =>{
    res.json({
        message:"Book fetched"
    })
})