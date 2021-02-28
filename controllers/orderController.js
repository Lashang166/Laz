const Orders = require("../models/orderModel")
const Product = require("../models/productModel")



 

module.exports = {
    add: async (req, res) => {
        if(req.isAuthenticated()){
            const {items,  totalPrice, address,  shipper, isPaid, payment} = req.body

            const order = new Orders({
                userId: req.user._id,
                items,
                totalPrice,
                address, 
                isPaid,
                shipper,
                payment
            })

            items.map(async (item) => {
                let qty = item.productCount;
                const product = await Product.findByIdAndUpdate({_id: item.productId}, { $inc: { soldCount: qty, countInStock: -qty  }})
            })

            order.save()
            res.status(200).json({ message: "success", order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    get: async (req, res) => {
        if(req.isAuthenticated()) {
            const order = await Orders.find({userId: req.user._id}).populate("shipper payment items.productId userId", "name name title username")
            res.status(200).json({ order})
        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    fetch: async (req, res) => {
        if(req.user.role === "admin"){
            const orders = await Orders.find({}).populate("items.productId userId shipper payment", "title username name name")
            res.status(200).json({ orders })

        }else{
            res.status(401).json({ message: "Unauthorize"})
        }
    },
    getById: async (req, res) => {
        //const order = await Orders.find({})
    }
    
}