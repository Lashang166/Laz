const router = require("express").Router()

const passport = require("passport")
const brandController = require('../controllers/brandController')

const Auth = require('../middlewares/AuthCheck')


router.get("/", brandController.show)
router.post("/create",Auth.isAdmin, brandController.create)



module.exports = router