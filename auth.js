const { AuthenticationError } = require('apollo-server')

const jwt =require('jsonwebtoken')

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if (authHeader){
        const token = authHeader.split('Bearer')[1];
        if (token) {
            try{
                const user = jwt.verify(token, "UNSAFE_STRING");
                return user;
            } catch (err){
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error("Authenticaiton token must be 'Bearer [tokeb]");
        }
        throw new Error(' Authorization header mmust be provided')
}