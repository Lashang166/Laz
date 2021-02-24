const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
    items: [{ 
        productId:{ type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        productCount: Number,
        productSize: String,
        productColor: String
    
    }],
    date: {
        type: Date,
        default: Date.now()
    },
    totalPrice: Number,
    address: String,
    isPaid: { Type: Boolean, default: false},
    paidAt: Date,
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    shipper: {  type: mongoose.Schema.Types.ObjectId, ref: "Shipper" },
    payment: {  type: mongoose.Schema.Types.ObjectId, ref: "Payment" }


}, {timestamps: true})


const orderModal = mongoose.model("Orders", orderSchema);
module.exports = orderModal