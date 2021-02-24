const Express = require("../models/shipperModel")


module.exports = { 
    add: async (req, res) => {
        try {
            const { name } = req.body
                const ex = await new Express({ name })
                ex.save()
                res.status(201).json({
                    message: "express successfully created"
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
            Express.find({}, (err, ex) => {
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
            const ex = await Express.findByIdAndDelete({ _id: req.params.id })
            
            res.status(202).json({
                message: "category successfully deleted",
                ex
            })
        } catch (error) {
            res.status(500).json({
                status: 'fail',
                message: error
            })   
        }
    }
}