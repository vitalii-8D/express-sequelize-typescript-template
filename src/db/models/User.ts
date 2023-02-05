import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelStatic,
  Sequelize,
} from 'sequelize'

import Cache from '../../redis/cache'

import { Gender, IUser, UserStatus } from '../../interfaces/User'

// @ts-ignore
export class UserModel extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> implements User {
  declare id: CreationOptional<number>
  declare name: string
  declare email: string
  declare gender: Gender
  declare status: UserStatus

  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // define association here
  static associate(models: { [k: string]: ModelStatic<any> }) {}
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: [Gender.MALE, Gender.FEMALE],
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: [UserStatus.ACTIVE, UserStatus.INACTIVE],
        defaultValue: UserStatus.ACTIVE,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
    },
  )

  UserModel.beforeSave(async () => {
    Cache.invalidateByPattern('*users*')
  })
  UserModel.beforeDestroy(async () => {
    Cache.invalidateByPattern('*users*')
  })

  return UserModel
}
