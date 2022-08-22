import dotenv from 'dotenv'
dotenv.config()
export default {
  DB: process.env.DB,
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  allowedOrigins: ['http://localhost:5173', 'http://localhost:27017'],
}
