require("./database/connection");
const express = require("express");

const { getAllbooks, createBooks, updateBookById, deleteBookById } = require("./controllers/books.contoller");


const app = express();
const PORT = 4000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log("The server is runing on the Port :", PORT);
  }
});

//json parser
app.use(express.json());

//Creating restFul APIs
/* app.get("/books",getAllbooks);

app.post("/books",createBooks);

app.patch("/books/:id",updateBookById);

app.delete("/books/:id",deleteBookById);
 */