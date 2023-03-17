const User = require('../models/User');

module.exports = {
    Query:{
        async user(_,{ID}) {
            return await User.findById(ID)
        },
        async getUser(_,{amount}){
            return await User.find().sort({createdAt: -1}).limit(amount)
        },
        async findUser(_,{userName}){
            return await User.findOne({user: userName}) 
        }
    },
    Mutation:{
       async createUser(_, {userInput: {name, email, password, userName}}) {
        const createdUser = new User({
            name: name,
            email: email,
            password: password,
            userName: userName,
        });
        const res = await createdUser.save(); // MongoDb Saving
        
        return {
            id: res.id,
            ... res._doc
        }
       },
       async deleteUser(_, {ID}){
        const wasDeleted = (await User.deleteOne({user: ID})).deletedCount
        return wasDeleted;
        // 1 something deleted or 0 nothing was deleted
       },
       async editUser(_, {ID, userInput: {name, email, password}}){
            const wasEdited = (await User.updateOne({_id: ID}, {name: name, email: email, password: password,})).modifiedCount;
            return wasEdited;
        // 1 something edit or 0 nothing was edit
       }
    },
   
}