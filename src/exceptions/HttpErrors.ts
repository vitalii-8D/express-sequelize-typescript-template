import { StatusCodes } from 'http-status-codes'

import {HttpException} from './HttpException'

export class BadRequestError extends HttpException {
  constructor(message: string = 'Bad Request') {
    super(StatusCodes.BAD_REQUEST, message)
  }
}

export class NotFoundError extends HttpException {
  constructor(message: string = 'Not Found') {
    super(StatusCodes.NOT_FOUND, message)
  }
}

export class ForbiddenError extends HttpException {
  constructor(message: string = 'Forbidden') {
    super(StatusCodes.FORBIDDEN, message)
  }
}

export class ConflictError extends HttpException {
  constructor(message: string = 'Conflict') {
    super(StatusCodes.CONFLICT, message)
  }
}