const mongoose = require("mongoose");
mongoose.connect("");

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

 const userSch = mongoose.model("users",userSchema);

 const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
 });
 const accountSch = mongoose.model('acount', accountSchema); 
module.exports = {
    userSch,
    accountSch
}