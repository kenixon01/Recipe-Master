const {gql} = require('apollo-server');

module.exports = gql`
type User{
    name: String
    email: String
    password: String
    userName: String
    token: String
}
input UserInput{
    name: String
    email: String
    password: String
    userName: String
}
input UserNames{
    email: String
    userName: String
}
input RegisterInput{
    name: String
    email: String
    password: String
    userName: String
}
input LoginInput{
    email:String
    password:String
}
input UpdateInput{
    name: String
    email: String
    password:String 
    userName:String
    }
type Query{
    findUser(inputUserNames: UserNames): User
    user(ID: ID!): User!
    getUser(amount: Int): [User]
}
type Mutation{
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`