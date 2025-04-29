/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre

seting 
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
            type:DataTypes.STRING
        }
    }) 
}































