export const enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export const enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export type IUser = {
  id?: number
  name: string
  email: string
  gender: Gender
  status: UserStatus
  createdAt?: Date
  updatedAt?: Date
}
