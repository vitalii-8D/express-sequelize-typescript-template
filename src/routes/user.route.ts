import { Router } from 'express'

import { UserController } from '../controllers'
import validationMiddleware from '../middlewares/validation.middleware'
import cachingMiddleware from '../middlewares/cache.middleware'
import { createUserValidators, idParamValidator, updateUserValidators } from '../validators/user.validators'

const router = Router()

router.get('/', cachingMiddleware, UserController.getUsers)
router.get('/:id', idParamValidator, validationMiddleware, UserController.getUserById)
router.post('/', ...createUserValidators, validationMiddleware, UserController.createUser)
router.put('/:id', idParamValidator, ...updateUserValidators, validationMiddleware, UserController.updateUser)
router.use('/:id', idParamValidator, validationMiddleware, UserController.deleteUser)

export default router
