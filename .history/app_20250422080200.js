const express = require("express")
const app = express() 

// let app = require("express")()  // invoking directly


app.listen(3000,() =>{
    console.log("...server/backend/node project is running in the port 3000..")
})


app.get('/',(req,res,)=>{

    res.send("Hello World")
}) //in home page or /

app.get('/about',(req,res)=>{
    res.send("About World") //in /about page
})

app.get('/html',(req,res) =>{
    res.send("<h1>Hello form HTMl</h1>") //using html tags
})

//if gone to /route without sending response the pages keeps on reloading so we need to send response.



