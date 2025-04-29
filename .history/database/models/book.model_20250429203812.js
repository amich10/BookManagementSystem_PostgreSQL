/* 
Table:books
Columns:bookName,bookPrice,bookAuthor,bookGenre

setting table name book sets books automatically
define takes two arg (table name, column names)
*/

const bookModel = (sequelize,DataTypes) =>{
    const Book = sequelize.define("book",{  
        bookName:{
            type:DataTypes.STRING,
            allowNull:false //bookName must be compulsary
        },
        bookPrice:{
            type:DataTypes.INTEGER, //or FLOAT
            allowNull:false
            
        },
        bookAuthor:{
            type:DataTypes.STRING,
            defaultValue:"Amich Budha Mgar"
        },
        bookGenre:{
            type:DataTypes.STRING
        }
    }) 
    return Book
}

































