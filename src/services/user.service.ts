import { BadRequestError, ConflictError } from '../exceptions/HttpErrors'
import { isEmpty } from '../utils/util'
import DB from '../db/models'
import { IUser } from '../interfaces/User'

const User = DB.User

const findAllUsers = async function (): Promise<IUser[]> {
  const allUsers: IUser[] = await User.findAll()
  return allUsers
}

const findUserById = async function (userId: number): Promise<IUser> {
  if (isEmpty(userId)) throw new BadRequestError('UserId is empty')

  const user: IUser | null = await User.findByPk(userId)
  if (!user) throw new ConflictError("User doesn't exist")

  return user
}

const createUser = async function (userData: IUser): Promise<IUser> {
  if (isEmpty(userData)) throw new BadRequestError('User data is empty')

  const user: IUser | null = await User.findOne({ where: { email: userData.email } })
  if (user) throw new ConflictError('User already exist')

  const createdUser: IUser = await User.create(userData)
  return createdUser
}

const updateUser = async function (userId: number, userData: Partial<IUser>): Promise<IUser> {
  if (isEmpty(userData)) throw new BadRequestError('User data is empty')

  const user: IUser | null = await User.findByPk(userId)
  if (!user) throw new ConflictError("User doesn't exist")

  await User.update(userData, { where: { id: userId } })

  // @ts-ignore
  const updatedUser: IUser = await User.findByPk(userId)
  return updatedUser
}

const deleteUser = async function (userId: number): Promise<IUser> {
  if (isEmpty(userId)) throw new BadRequestError('UserId is empty')

  const user: IUser | null = await User.findByPk(userId)
  if (!user) throw new ConflictError("User doesn't exist")

  await User.destroy({ where: { id: userId } })

  return user
}

export default { findAllUsers, findUserById, createUser, updateUser, deleteUser }
