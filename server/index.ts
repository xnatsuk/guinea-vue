import http from 'http'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import config from './config'
import schema from './src/graphql/schema/index'

const connectDb = async () => {
  try {
    await mongoose.connect(config.MONGO_URI)
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
  server.applyMiddleware({ app, path: '/graphql' })

  await new Promise<void>(resolve => httpServer.listen(process.env.PORT || config.PORT, resolve))
  console.log(`🚀  Server ready at ${config.PORT}`)
  console.log(`🚀  Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
}

startServer()
