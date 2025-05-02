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

//json parser
app.use(express.json())

//Creating restu ful apis
app.get('/books',async (req,res) =>{

    //books is a key db = {} => connection.js
    const bookDatas = await books.findAll()  // SELECT * FROM books; //always returns array
    res.json({
        data:bookDatas,
        //if key and values names are same like data:data it can be written as { data } as a single
        message:"Book fetched"
    })
})

app.post('/books',async(req,res) =>{
    // console.log(req.body) // data send from postment consoles here

    /* const {bookName,bookPrice} = req.body; //destructuring keys
    console.log(bookName); */

   /*  let payload = req.body;
    await books.create(payload)
    res.json({
        message:"Book created"
    }) */

    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body;

    

})

app.patch("/books/:id",(req,res) =>{
    res.json({
        message:"Book updated"
    })
})

app.delete('/books/:id',(req,res) =>{
    res.json({
        message:"Book deleted"
    })
})


