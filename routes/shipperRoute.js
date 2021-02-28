const router  = require("express").Router()
const ShiperController = require('../controllers/shipperController')
const isAuth = require('../middlewares/AuthCheck')


router.post("/add",isAuth.isAdmin, ShiperController.add)
router.get("/", ShiperController.get)
router.delete('/delete/:id',isAuth.isAdmin, ShiperController.delete)



module.exports = router