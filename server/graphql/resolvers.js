const User = require('../models/User');
const {ApolloError} = require('apollo-server-errors');
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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
       },
       async registerUser(_,{registerInput: {name, email, password, userName}}) {
        // see if an old user exist with email 
        const oldUser = await User.findOne({email});

        if (oldUser){
            throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXIST')
        }

        const oldUsers = await User.findOne({userName});

        if (oldUsers){
            throw new ApolloError('A user is already registered with the user name: ' + userName, 'USER_ALREADY_EXIST')
        }
        // encrypt password
        var encrypted = await bycrpt.hash(password,10);

        const newUser = new User({
            name: name,
            email: email.toLowerCase(),
            password: encrypted,
            userName: userName
        })
        // Build Moongose model
        const token = jwt.sign(
            {user_id: newUser._id, email},
            "UNSAFE_STRING",{
                expiresIn:"5h"
            }
        );
        newUser.token = token;
        // Save User
        const res = await newUser.save();

        return{
            id: res.id,
            ...res._doc
        }
       },
       async loginUser(_,{loginInput: {email, password}}){
        //input validation 
        if (!(email && password)) {
                throw new ApolloError("All input is required", 'ALL INPUT FIELD REQUIRED')
                //res.status(400).send("All input is required");
            }
            
        const user = await User.findOne({email});
        if (user && (await bycrpt.compare(password, user.password))) {
            const token = jwt.sign(
                {user_id: user._id, email},
                "UNSAFE_STRING",{
                    expiresIn:"5h"
                }
            );
            user.token = token;
            return {
                id: user.id,
                ...user._doc
            }
        } else {
            throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD')
        }

       }
    },
}