/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre

setting table name book sets books automatically

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































