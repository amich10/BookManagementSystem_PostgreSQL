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
            type:DataTypes.INTEGER
        },
        bookAuthor:{
            type:DataTypes.STRING
        },
        bookGenre:{
            
        }
    }) //gives table name as books
}































