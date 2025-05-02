require('./database/connection')
const express = require("express")
const { books } = require('./database/connection')

const app = express()
const PORT = 4000

app.listen(PORT,(err) =>{
    if(!err){
        console.log("The server is runing on the Port :",PORT)
    }
})

//Creating restu ful apis
app.get('/',(req,res) =>{

    const book = books. //books is a from key in db = {} => connection.js
    res.json({
        message:"Book fetched"
    })
})

app.post('/',(req,res) =>{
    res.json({
        message:"Book created"
    })
})

app.patch("/:id",(req,res) =>{
    res.json({
        message:"Book updated"
    })
})

app.delete('/:id',(req,res) =>{
    res.json({
        message:"Book deleted"
    })
})


