const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: {type: String },
    email: {type: String, unique: true},
    password: {type: String, unique: true},
    userName: {type: String},
    token: {type:String}
});

module.exports = model('User', userSchema);