require("./database/connection");
const express = require("express");

// const { getAllbooks, createBooks, updateBookById, deleteBookById } = require("./controllers/books.contoller");

const bookRoute = require('./routes/books.route')

const app = express();
const PORT = 4000;


//json parser
app.use(express.json());
app.use('/api/v1',bookRoute)


app.listen(PORT, (err) => {
  if (!err) {
    console.log("The server is runing on the Port :", PORT);
  }
});