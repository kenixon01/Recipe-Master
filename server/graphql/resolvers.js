const User = require('../models/User');
const {ApolloError} = require('apollo-server-errors');
const {validateRegisterInput, validateLoginInput } = require('../validators')
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getToken = (user) => jwt.sign({id: user._id}, "UNSAFE_STRING", {expiresIn: '1 days'});

const getUserFromToken = async (token, db) => {
    if (!token) { return null }
  
    const tokenData = jwt.verify(token, JWT_SECRET);
    if (!tokenData?.id) {
      return null;
    }
    return await db.collection('Users').findOne({ _id: ObjectID(tokenData.id) });
  }

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
       // Register
       async registerUser(_,{registerInput: {name, email, password, userName}}) {

        // const { valid, errors } = validateRegisterInput(
        //     name,
        //     email, 
        //     password, 
        //     userName
        //   );
        //   if (!valid) {
        //     throw new ApolloError('Errors', { errors });
        //   }


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
            ...res._doc,
            token
        }
       },
       //Login

       async loginUser(_,{loginInput: {email, password}}){ 
        const user = await User.findOne({email});

        if (!user) {
            errors.general = 'User not found';
            throw new ApolloError('User not found', { errors });
          }

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
                ...user._doc,
                token
            }
        } else {
            throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD')
        }

       },
       async signIn (_,{input: {email, password}}) {
            const user = await User.findOne({email});
            const isPasswordCorrect = user && await bycrpt.compare(password, user.password);
        if (!user){
            errors.general = 'User not found';
            throw new Error('User not found', { errors });
          }
        if (!user ||!isPasswordCorrect) {
            throw new Error("Invaild Vredentials");
        }
        return {
            user,
            token: getToken(user)
        }

        },
        async signUp(_,{ input: {name,password,email,userName}},{db}){
            const oldUser = await User.findOne({email});
            if (oldUser){
                throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXIST')
            }
    
            const oldUsers = await User.findOne({userName});
    
            if (oldUsers){
                throw new ApolloError('A user is already registered with the user name: ' + userName, 'USER_ALREADY_EXIST')
            }
            var encrypted = await bycrpt.hash(password,10);
    
            const newUser = new User({
                name: name,
                email: email.toLowerCase(),
                password: encrypted,
                userName: userName
            })
    
            const token = jwt.sign({id: newUser.id, email}, 
                "UNSAFE_STRING",
                { expiresIn:"1 day"}) ;
            newUser.token = token;
    
            const result = await newUser.save();
    
            return{
                result,
                token: getToken(newUser)
            }
           },

       },
       
    }
    
