
const { books } = require("../database/connection");

exports.getAllbooks = async (req, res) => {
  //books is a key db = {} => connection.js
  const bookDatas = await books.findAll(); // SELECT * FROM books; //always returns array
  res.json({
    data: bookDatas,
    //if key and values names are same like data:data it can be written as { data } as a single
    message: "Book fetched",
  });
};


exports.getSingleBookByPk = async(req, res) =>{

    const bookId  = req.params.id;
    const existsBook = await books.findByPk(bookId)
    // const existsBook = await books.findAll({where:{bookId}}) //always returns array

    if(!existsBook){
        return res.status(404).json({
            message:"Book not found"
        });
    }
    res.json({
        data:existsBook,
        message:"Boook fetched By id"
    });
}

exports.createBooks = async (req, res) => {
  // console.log(req.body) // data send from postment consoles here

  /* const {bookName,bookPrice} = req.body; //destructuring keys
       console.log(bookName); */

  /*  let payload = req.body;
       await books.create(payload)
       res.json({
           message:"Book created"
       }) */
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookGenre || !bookPrice || !bookName || !bookAuthor) {
    return res.status(400).json({
      message: "All fields are compulsary",
    });
  }

  //check if existing book exists
  const existsBook = await books.findOne({ where: { bookName : bookName } });
  if (existsBook) {
    return res.status(409).json({
      message: "Book with this name already exists. Please, change book name.",
    });
  }

  if (bookName)
    await books.create({
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      bookGenre,
    });
  res.json({
    message: "Books created successfully",
  });
};


exports.updateBookById = async (req, res) => {
  try {
    
  } catch (exception) {
    console.log(exception)
  }
};

exports.deleteBookById = async (req, res) => {
  const id = req.params.id;
  // const bookId = req.body.id (book id sent from body)
  const book = await books.findByPk(id)
  if(!book){
    res.status(404).json({
      message:"Book not found",
      status:"BOOK_NOT_FOUND"
    })
  }
  await books.destroy({where:{id}})  //{where:{id:id}}
  res.json({
    message: "Book deleted successfully",
  });

  //delete all book
 /*  await User.destroy({
    where: {}, // no condition = delete all
    truncate: true // optional: resets the auto-increment counter
  }); */
};


//module.exports = {getAllbooks,createBooks,updateBook,deleteBook}