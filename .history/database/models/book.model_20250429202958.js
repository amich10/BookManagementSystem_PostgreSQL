/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre
*/

const bookModel = (sequelize,DataTypes) =>{
    sequelize.define("book",{  //gives table name as books
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
            type:DataTypes.STRING
        }
    }) 
}































