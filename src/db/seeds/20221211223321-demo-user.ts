import { QueryInterface } from 'sequelize'
import { faker } from '@faker-js/faker'

import { Gender, IUser, UserStatus } from '../../interfaces/User'

const timestamp = {
  createdAt: new Date(),
  updatedAt: new Date(),
}

const getRandomUser = () => ({
  // id: faker.datatype.number({ max: 100000 }),
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE]),
  status: faker.helpers.arrayElement([UserStatus.ACTIVE, UserStatus.INACTIVE]),
  ...timestamp,
})

const demoUsers: IUser[] = []

for (let i = 0; i <= 500; i++) {
  const user = { id: i + 1, ...getRandomUser() }
  demoUsers.push(user)
}

module.exports = {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Users', demoUsers)
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {})
  },
}
