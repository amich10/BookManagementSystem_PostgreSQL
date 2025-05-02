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
app.get('/',async (req,res) =>{

    //books is a key db = {} => connection.js
    const bookDatas = await books.findAll()  // SELECT * FROM books;
    res.json({
        data:bookDatas,
        message:"Book fetched"
    })
})

app.post('/',async(req,res) =>{
    let payload = req.body;

    await 
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


