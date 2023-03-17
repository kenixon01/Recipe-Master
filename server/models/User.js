const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    userName: String
});

module.exports = model('User', userSchema);