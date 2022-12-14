import http from 'http'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import config from './config'
import schema from './src/graphql/schema'

const connectDb = async () => {
  const db = `mongodb://${config.MONGODB_USER}:${config.MONGODB_PASSWORD}@${config.MONGODB_HOST}?authSource=admin`
  try {
    await mongoose.connect(db)
    console.log(`MongoDB Connected: ${mongoose.connection.host}`)
  }
  catch (error) {
    console.log(error)
  }

  mongoose.set('debug', true)
}

async function startServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer(schema)

  await connectDb()
  await server.start()
  server.applyMiddleware({ app, cors: { origin: config.allowedOrigins }, path: '/graphql' })

  await new Promise<void>(resolve => httpServer.listen(process.env.PORT || config.PORT, resolve))
  console.log(`🚀  Server ready at ${config.PORT}`)
  console.log(`🚀  Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
}

startServer()
