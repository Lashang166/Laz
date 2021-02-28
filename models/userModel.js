const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,    
    },
    password: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        require: true,
        default: "user"
    },
    thumbnail: {
        type: String,
        defult: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjira.mariadb.org%2Fbrowse%2FMDEV-21002&psig=AOvVaw0htVGlyUUro7asy3Tp_jDc&ust=1614618890862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOit1p2Rje8CFQAAAAAdAAAAABAE"
    },
    googleId: String
})

UserSchema.pre("save", function(next) {
    if(!this.isModified('password')){
        return next()
    }
    bcrypt.hash(this.password, 10, (err,passwordHash) => {
        if(err) return next(err);
        this.password = passwordHash;
        next()
    });
});

UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err)
            return cb(err);
        else {
            if(!isMatch)
                return cb(err);

            return cb(null, this);    
        }
    })
};

module.exports = mongoose.model("User", UserSchema)