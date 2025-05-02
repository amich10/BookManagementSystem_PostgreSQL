require("./database/connection");
const express = require("express");

// const { getAllbooks, createBooks, updateBookById, deleteBookById } = require("./controllers/books.contoller");

const bookRoute = require('./routes/books.route')

const app = express();
const PORT = 4000;


//json parser
app.use(express.json());
app.use('/api/v1',bookRoute)

//Creating restFul APIs
/* app.get("/books",getAllbooks);

app.post("/books",createBooks);

app.patch("/books/:id",updateBookById);

app.delete("/books/:id",deleteBookById);
 */

app.listen(PORT, (err) => {
  if (!err) {
    console.log("The server is runing on the Port :", PORT);
  }
});