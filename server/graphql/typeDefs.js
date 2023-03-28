const {gql} = require('apollo-server');

module.exports = gql`
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
    signUp(input: SignUpInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
}
input SignInInput {
    email: String!
    password: String!
}
input SignUpInput{
    name: String!
    password:String!
    email: String!
    userName: String!
}
type AuthUser {
    user: User!
    token: String!
  }
type User{
    id: ID!
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
`