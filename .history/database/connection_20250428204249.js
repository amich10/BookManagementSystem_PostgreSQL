// press ctrl + space inside destructuring to check whats inside sequelize
const { Sequelize,DataTypes} = require("sequelize")






//class instantiation - object created from object
const sequelizeObj = new Sequelize("postgresql://postgres.jlcwizhphipnydjsqdsr:ZUTdm7qnjixkTsxK@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") //connection string

sequelizeObj.authenticate()
.then(() =>{
    console.log("Connected")
})
.catch(() =>{
    console.log
})