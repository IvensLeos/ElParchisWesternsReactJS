export const {

   NODE_ENV = 'development',

   MONGODB_URI = 'mongodb+srv://mongo:mongoose@cluster0-0hr3i.mongodb.net/test?retryWrites=true&w=majority',

   SESSION_NAME = 'El Parchis Westerns',

   SESSION_SECRET = 'secret!session',

   SESSION_LIFETIME = 1000 * 60 * 60 * 24 * 3 //3 Days

} = process.env