import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

const EX_TIME = 20

const cachingMiddleware = async function (req: Request, res: Response, next: NextFunction) {
  // const key = req.originalUrl
  // const cached = await redisClient.get(key)
  // if (cached) {
  //   return res.status(StatusCodes.NOT_MODIFIED).json(JSON.parse(cached))
  // }
  // res.originalJson = res.json
  // res.json = function (data) {
  //   redisClient.setEx(key, EX_TIME, JSON.stringify(data))
  //
  //   return res.originalJson(data)
  // }
  next()
}

export default cachingMiddleware
