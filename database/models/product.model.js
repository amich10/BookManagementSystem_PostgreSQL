const ProductModel = (sequelize,DataTypes) =>{
    const Product = sequelize.define("product",{
        product:{
            type:DataTypes.STRING
        },
        productPrice : {
            type:DataTypes.FLOAT
        },
        productImage:{
            type:DataTypes.STRING
        }
    })
    return Product
}

module.exports = ProductModel;