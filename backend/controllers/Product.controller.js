const Product = require("../models/Product.model");
const Order = require("../models/Order.model"); 

const insertProducts = async (req, res) => {
  try {
    const { products } = req.body;
    const insertedProducts = await Product.insertMany(products);
    return res.status(201).json({
      message: "Products Inserted Successfully",
      products: insertedProducts,
    });
  } catch (err) {
    console.error("Error inserting products:", err.message);
    return res.status(500).json({
      message: "Failed to insert products",
      error: err.message,
    });
  }
};

const purchaseProduct = async (req, res) => {
  try {
    const { products, userId } = req.body;

    let totalAmount = 0;
    let orderItems = [];

    for (let item of products) {
      const product = await Product.findById(item.productId);

      if (!product || product.stock < item.quantity) {
        return res.status(400).json({
          message: "Product currently unavailable or insufficient stock",
        });
      }

      product.stock -= item.quantity;
      await product.save();

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: parseFloat(product.price),
      });

      totalAmount += item.quantity * parseFloat(product.price);
    }

    const billId = Math.floor(100000 + Math.random() * 900000);

    const newOrder = new Order({
      user: userId,
      products: orderItems,
      totalAmount,
      billId,
    });

    await newOrder.save();

    return res.status(200).json({
      message: "Purchase successful",
      order: newOrder,
    });
  } catch (err) {
    console.log.error("Error purchasing product:", err.message); // Use err.message
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

//get purchase
const getUserOrders=async(req,res)=>{
  try{
    const {userId}=req.params;
    const orders = await Order.find({user:userId}).populate("products.product").populate("user","username email")
    return res.status(200).json({message:"Order history Success",orders})
    

  }catch(err){
    console.log.error("Error getting user orders:", err);
    return res.status(500).json({message:"Internal Server Error",err}) // Use err.message
  }
}

module.exports = { insertProducts, purchaseProduct ,getUserOrders };
