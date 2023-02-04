import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { HttpException } from '../exceptions/HttpException'

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || StatusCodes.INTERNAL_SERVER_ERROR
    const message: string = error.message || 'Something went wrong'

    req.log.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`)
    res.status(status).json({ message })
  } catch (error) {
    next(error)
  }
}

export default errorMiddleware
