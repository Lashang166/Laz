const Brand = require("../models/brandModel")

module.exports = {
    show: async (req, res) => {
        try {
            const brand = await Brand.find()
            res.status(200).json(brand)
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })        
        }
    },
    create: async (req, res) => {
        try {
            const { name } = req.body
                const brand = await new Brand({ name })
                brand.save()
                res.status(201).json({
                    message: "brand successfully created"
                })
    
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })            
        }
    }
}