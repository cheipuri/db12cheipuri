const mongoose = require("mongoose") 
const shopperstopSchema = mongoose.Schema({ 
    Itemname: String, 
    Quantity: Number, 
    price: Number 
}) 
 
module.exports = mongoose.model("ShopperstopSchema", 
shopperstopSchema) 