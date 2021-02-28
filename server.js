require('dotenv').config()
const express = require("express")
const session = require('express-session')
const cors = require('cors')
const multer = require("multer")
const cookieParser = require("cookie-parser")
const passportConf = require("./config/passport")

const connectDb = require('./config/ConnectDb')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

//db
connectDb()
//session
app.use(
  session({
    name:'session5',
    secret: process.env.cookieSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 3600000 }
  })
)
passportConf(app)

app.use("/api/auth/", require("./routes/authRoutes"))
app.use('/api/brand', require('./routes/brandRoute'))
app.use('/api/category', require('./routes/categoryRoute'))
app.use('/api/payment', require('./routes/paymentRoute'))
app.use('/api/shipper', require('./routes/shipperRoute'))
app.use('/api/product', require('./routes/productRoute'))
app.use('/api/order', require("./routes/orderRoute"))



app.listen(process.env.PORT || 4000, () => {
    console.log("running", process.env.PORT );
})   