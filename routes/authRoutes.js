const router = require('express').Router()

const userController = require('../controllers/userControllers')
const passport = require("passport")

const auth = passport.authenticate("local", { session: true })
const google = passport.authenticate("google")


router.post("/register", userController.register)
router.post("/login",auth,  userController.login)
router.get("/logout",  userController.logout)
router.get("/authenticated",  userController.authenticated)
router.get("/google/redirect", google ,  userController.googleRedirect)

router.get('/google', passport.authenticate("google", { 
    scope: ['profile', 'email']
 }))




module.exports = router