import express, { Express } from 'express'
import pino from 'express-pino-logger'
import cors from 'cors'

import swaggerJSDoc, { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import ApiRouter from './routes'

import errorMiddleware from './middlewares/error.middleware'
import { loggerConfig } from './config/logger'

declare global {
  namespace Express {
    export interface Response {
      originalJson: (data: object) => any
    }
  }
}

const app: Express = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(pino(loggerConfig))
app.use(cors())

app.use('/api', ApiRouter)

const swaggerOptions: Options = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      version: '1.0.0',
      description: 'Example docs',
    },
  },
  apis: ['swagger.yaml'],
}
const specs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(errorMiddleware)

export default app
