import { Request, Response, NextFunction } from 'express'

import Cache from '../redis/cache'

const cachingMiddleware = async function (req: Request, res: Response, next: NextFunction) {
  const key = req.originalUrl
  const cached = await Cache.get(key)
  if (cached) return res.json(cached)

  res.originalJson = res.json
  res.json = function (data) {
    Cache.set(key, data)

    return res.originalJson(data)
  }
  next()
}

export default cachingMiddleware
