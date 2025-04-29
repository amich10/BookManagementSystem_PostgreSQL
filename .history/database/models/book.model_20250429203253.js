/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre

setting table name book sets books automatically
define takes two arg (table name, column names)
*/

const bookModel = (sequelize,DataTypes) =>{
    sequelize.define("book",{  
        bookName:{
            type:DataTypes.STRING,
            allowNull:false 
        },
        bookPrice:{
            type:DataTypes.INTEGER //or FLOAT
        },
        bookAuthor:{
            type:DataTypes.STRING
        },
        bookGenre:{
            type:DataTypes.STRING
        }
    }) 
}
bookModel()































