const router  = require("express").Router()
const Payment = require('../controllers/paymentController')
const isAuth = require("../middlewares/AuthCheck")

router.post("/add",isAuth.isAdmin, Payment.add)
router.get("/", Payment.get)
router.delete('/delete/:id',isAuth.isAdmin, Payment.delete)

module.exports = router