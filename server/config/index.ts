import dotenv from 'dotenv'
dotenv.config()
export default {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  allowedOrigins: ['http://localhost:5173', 'http://localhost:27017', 'http://localhost:8080/graphql'],
}
