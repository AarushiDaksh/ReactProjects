const mongoose = require("mongoose");



const ProductSchema=new mongoose.Schema({


        name: {
            type: String,
            required:true 
        },
        description: {
            type: String,
        },
        price: {
            type: String,
            required:true 
        },
        stock: {
            type: Number,
            default:0,
            required:true
        },
    },{
        timestamps:true
    }
)


module.exports=mongoose.model("Product",ProductSchema);
