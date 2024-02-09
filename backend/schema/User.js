const mongoose = require('mongoose')


export const userSchema = mongoose.Schema({
    firstName : {
        type : String, 
        required : true,
    },
    lastName : {
        type : String, 
        required :  true,
    },
    password : {
        type : String, 
        required : true,
        unique : true, 
    },
    username : {
        type : String, 
        required : true,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
	User
};
