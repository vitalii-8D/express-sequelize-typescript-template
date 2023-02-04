import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { UserService } from '../services'
import { IUser } from '../interfaces/User'

const { OK, CREATED } = StatusCodes

export const getUsers = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const findAllUsersData: IUser[] = await UserService.findAllUsers()

    res.status(OK).json(findAllUsersData)
  } catch (error) {
    next(error)
  }
}

export const getUserById = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userId = +req.params.id
    const user: IUser = await UserService.findUserById(userId)

    res.status(OK).json(user)
  } catch (error) {
    next(error)
  }
}

export const createUser = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userData: IUser = req.body
    const createdUser = await UserService.createUser(userData)

    res.status(CREATED).json(createdUser)
  } catch (error) {
    next(error)
  }
}

export const updateUser = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userId = +req.params.id
    const userData: Partial<IUser> = req.body

    const updatedUser = await UserService.updateUser(userId, userData)

    res.status(OK).json(updatedUser)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userId = +req.params.id
    const deleteUser: IUser = await UserService.deleteUser(userId)

    res.status(OK).json(deleteUser)
  } catch (error) {
    next(error)
  }
}
