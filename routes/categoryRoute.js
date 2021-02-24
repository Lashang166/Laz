const router = require("express").Router()

const passport = require("passport")
const categoryController = require('../controllers/categoryController')

const isAuth = require('../middlewares/AuthCheck')

router.get("/", categoryController.show)
router.post("/create",isAuth.isAdmin,  categoryController.create)
router.delete("/delete/:id",isAuth.isAdmin,  categoryController.delete)



module.exports = router