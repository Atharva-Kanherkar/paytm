const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/paytm")


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



const AccountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    balance : {
        type : Number,
        required : true,
    }
})
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', AccountSchema);

module.exports = {
	User,
    Account
};
