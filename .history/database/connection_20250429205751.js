// press ctrl + space inside destructuring to check whats inside sequelize
const { Sequelize,DataTypes} = require("sequelize")
const bookModel = require('./models/book.model')


//class instantiation - object created from object
const sequelizeObj = new Sequelize("postgresql://postgres.jlcwizhphipnydjsqdsr:ZUTdm7qnjixkTsxK@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") //connection string

sequelizeObj.authenticate()
.then(() =>{
    console.log(".....Connected to dB.....")
})
.catch((err) =>{
    console.log("......Error connecting to dB.....:", err)
})


const db = {} //adding key value pair in db object
db.Sequelize = Sequelize //class
db.sequelizeObj = sequelizeObj //object


db.books = bookModel(sequelizeObj,DataTypes) // or require('./models/book.model')()
db.users = require('./models/book.model')(sequelizeObj,DataTypes)

//

module.exports = db



