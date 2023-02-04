import { Router } from 'express'

import UserRouter from './user.route'

const ApiRouter = Router()

ApiRouter.use('/users', UserRouter)

export default ApiRouter
