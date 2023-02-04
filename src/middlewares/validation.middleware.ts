import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

import { BadRequestError } from '../exceptions/HttpErrors'

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  const msg = errors
    .array()
    .map(er => `${er.msg}`)
    .join(', ')
  if (!errors.isEmpty()) return next(new BadRequestError(msg))

  next()
}

export default validationMiddleware
