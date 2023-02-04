import { QueryInterface } from 'sequelize'
import { Gender, IUser, UserStatus } from '../../interfaces/User'

const now = new Date()
const timestamp = {
  createdAt: new Date(),
  updatedAt: new Date(),
}

const demoUsers: IUser[] = [
  {
    id: 194211,
    name: 'Narayan Gill V',
    email: 'narayan_v_gill@rippin.info',
    gender: Gender.FEMALE,
    status: UserStatus.ACTIVE,
    ...timestamp
  },
  {
    id: 194136,
    name: 'Daksha Ahuja',
    email: 'ahuja_daksha@keeling.info',
    gender: Gender.FEMALE,
    status: UserStatus.INACTIVE,
    ...timestamp
  },
  {
    id: 194135,
    name: 'Kamala Abbott',
    email: 'abbott_kamala@veum-oconnell.net',
    gender: Gender.FEMALE,
    status: UserStatus.ACTIVE,
    ...timestamp
  },
  {
    id: 194134,
    name: 'Vijay Pothuvaal',
    email: 'pothuvaal_vijay@trantow.co',
    gender: Gender.MALE,
    status: UserStatus.ACTIVE,
    ...timestamp
  },
  {
    id: 194133,
    name: 'Jaya Dhawan',
    email: 'dhawan_jaya@purdy.co',
    gender: Gender.MALE,
    status: UserStatus.ACTIVE,
    ...timestamp
  },
  {
    id: 194132,
    name: 'Swami Dwivedi',
    email: 'swami_dwivedi@johnson.co',
    gender: Gender.FEMALE,
    status: UserStatus.INACTIVE,
    ...timestamp
  },
  {
    id: 194131,
    name: 'Trilokesh Saini',
    email: 'saini_trilokesh@hand.co',
    gender: Gender.MALE,
    status: UserStatus.INACTIVE,
    ...timestamp
  },
  {
    id: 194130,
    name: 'Aagam Adiga DVM',
    email: 'dvm_aagam_adiga@watsica-ferry.info',
    gender: Gender.MALE,
    status: UserStatus.ACTIVE,
    ...timestamp
  },
  {
    id: 194129,
    name: 'Chidaatma Nair',
    email: 'nair_chidaatma@nikolaus.biz',
    gender: Gender.FEMALE,
    status: UserStatus.INACTIVE,
    ...timestamp
  },
  {
    id: 193984,
    name: 'Narinder Kakkar',
    email: 'narinder_kakkar@lueilwitz.io',
    gender: Gender.MALE,
    status: UserStatus.INACTIVE,
    ...timestamp
  },
]

module.exports = {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Users', demoUsers)
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {})
  },
}
