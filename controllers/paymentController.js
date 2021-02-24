const Payment = require("../models/paymethodModel")


module.exports = { 
    add: async (req, res) => {
        try {
            const { name } = req.body
                const ex = await new Payment({ name })
                ex.save()
                res.status(201).json({
                    message: "Payment successfully created"
                })
   
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })            
        }
    },
    get: (req, res) => {
        try {
            Payment.find({}, (err, ex) => {
                res.status(200).json(ex)
            })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })    
        }
    },
    delete: async (req, res) => {
        try {
              const payment = await Payment.findByIdAndDelete({ _id: req.params.id })
              res.status(202).json({
                    message: "category successfully deleted",
                    payment
                })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })   
        }
    }
}