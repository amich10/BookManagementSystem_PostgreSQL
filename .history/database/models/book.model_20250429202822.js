/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre
*/

const bookModel = (sequelize,DataTypes) =>{
    sequelize.define("book",{
        bookName:"",
        bookPrice:"",
        bookAuthor:"",
    }) //gives table name as books
}































