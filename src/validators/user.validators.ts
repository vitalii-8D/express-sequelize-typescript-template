import { body, param } from 'express-validator'

const createUserValidators = [
  body('name').isString().notEmpty().withMessage('Name must be a string'),
  body('email').isEmail().withMessage('Email not valid'),
  body('gender').isIn(['male', 'female']).withMessage('We don`t support non-binary people'),
  body('status').optional().isIn(['male', 'female']).withMessage('Invalid status'),
]

const updateUserValidators = createUserValidators.map(v => v.optional())

export const idParamValidator = param('id').exists().toInt()

export { createUserValidators, updateUserValidators }
