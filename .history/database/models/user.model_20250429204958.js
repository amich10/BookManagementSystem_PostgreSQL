

const userModel = (sequelize,DataTypes) =>{
    sequelize.define("user",{
        username:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        email:{
            ty
        }
    })    
}