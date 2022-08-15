/* eslint-disable no-console */
import cors from 'cors'
import * as dotenv from 'dotenv'
import type { Request, Response } from 'express'
import express from 'express'
import { AppRoutes } from './routes'
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

AppRoutes.forEach((route) => {
  app[route.method](
    route.path,
    (request: Request, response: Response, next: Function) => {
      route
        .action(request, response)
        .then(() => next)
        .catch((err: any) => next(err))
    },
  )
})

console.log(`🚀 Server ready at http://localhost:${PORT}`)

