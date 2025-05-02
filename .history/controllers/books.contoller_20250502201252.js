 const bookContoller = () =>{
    getAllbooks = 
 }
 
 async (req, res) => {


  //books is a key db = {} => connection.js
  const bookDatas = await books.findAll(); // SELECT * FROM books; //always returns array
  res.json({
    data: bookDatas,
    //if key and values names are same like data:data it can be written as { data } as a single
    message: "Book fetched",
  });
}