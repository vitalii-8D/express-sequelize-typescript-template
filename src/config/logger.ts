import { Request, Response } from 'express'

export const loggerConfig = {
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  serializers: {
    req: (req: Request) => {
      const requestLog: { [k: string]: string } = {
        method: req.method,
        url: req.url,
      }
      if (req.body) requestLog.body = req.body
      return requestLog
    },
    res: (res: Response) => ({
      status: res.statusCode,
    }),
  },
}
