const {gql} = require('apollo-server');

module.exports = gql`
type User{
    name: String
    email: String
    password: String
    userName: String
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
type Query{
    findUser(inputUserNames: UserNames): User
    user(ID: ID!): User!
    getUser(amount: Int): [User]
}
type Mutation{
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean
}

`