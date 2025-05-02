require("./database/connection");
const express = require("express");
const { books } = require("./database/connection");
const { getAllbooks, createBooks } = require("./controllers/books.contoller");

const app = express();
const PORT = 4000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log("The server is runing on the Port :", PORT);
  }
});

//json parser
app.use(express.json());

//Creating restFul apis
app.get("/books",getAllbooks);

app.post("/books",createBooks);

app.patch("/books/:id",u);

app.delete("/books/:id");
