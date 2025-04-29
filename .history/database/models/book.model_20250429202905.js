/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre
*/

const bookModel = (sequelize,DataTypes) =>{
    sequelize.define("book",{
        bookName:{
            type:DataTypes.STRING
        },
        bookPrice:{
            type:
        },
        bookAuthor:"",
        bookGenre:""
    }) //gives table name as books
}































