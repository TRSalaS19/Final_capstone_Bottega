const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        max: 10,
    },
    fName: {
        type: String, 
        required: true,
    },
    lName: {
        type: String, 
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        require: true
    }
}, 
{
    timestamps: true,
});

UserSchema.pre('save', function(next) {
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10,(err, passwordHash) => {
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password, (err,isMatch) => {
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    });
}


module.exports = mongoose.model('User', UserSchema);






// UserSchema.pre('save', function(next) {
//     if(!this.isModified('password'))
//         return next();
//     bcrypt.hash(this.password,10,(err, passwordHash) => {
//         if(err)
//             return next(err);
//         this.password = passwordHash;
//         next();
//     });
// });

// UserSchema.methods.comparePassword = function(password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if(err)
//             return cb(err);
//         else {
//             if(!isMatch)
//                 return cb(null,isMatch);
//             return cb(null, this);
//         }
//     });
// }


// const User = mongoose.model('User', UserSchema);