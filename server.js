require('dotenv').config()
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
  })

app.listen(process.env.PORT || 4000, () => {
    console.log("running");
})