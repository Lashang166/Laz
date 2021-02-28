const mongoose = require('mongoose')
const db ="mongodb://localhost:27017/Laz"


module.exports = function() {  
    mongoose
        .connect(db ,
            { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
        .then(() => {
            console.log("conenct to db");
        })
        .catch(err => {
            console.log(err);
        })
}  