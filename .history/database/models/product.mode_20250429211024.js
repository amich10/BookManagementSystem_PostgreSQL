const ProductModel = (sequelize,DataTypes) =>{
    const Product = sequelize.define("product",{
        product:{
            type:DataTypes.STRING
        },
        productPrice : {
            
        }
    })
}