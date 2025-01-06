const mongoose = require("mongoose");
mongoose.connect("");

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

 const userSch = mongoose.model("users",userSchema);

module.exports = {
    userSch
}