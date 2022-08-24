import http from 'http'
import mongoose from 'mongoose'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import schema from './src/graphql/schema/index'

mongoose.Promise = global.Promise

mongoose.connect(config.MONGO_URI)

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.MONGO_URI}`)
})

async function startApolloServer() {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer(schema)

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  await new Promise<void>(resolve => httpServer.listen(process.env.PORT || config.PORT, resolve))
  console.log(`🚀  Server ready at ${config.PORT}`)
  console.log(`🚀  Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
}

startApolloServer()
