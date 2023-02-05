import { QueryInterface } from 'sequelize'
import { faker } from '@faker-js/faker'

import { Gender, IUser, UserStatus } from '../../interfaces/User'

const timestamp = {
  createdAt: new Date(),
  updatedAt: new Date(),
}

const getRandomUser = () => ({
  id: faker.datatype.number({ max: 50000 }),
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  gender: faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE]),
  status: faker.helpers.arrayElement([UserStatus.ACTIVE, UserStatus.INACTIVE]),
  ...timestamp,
})

const demoUsers: IUser[] = []

for (let i = 0; i <= 200; i++) {
  demoUsers.push(getRandomUser())
}

module.exports = {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('Users', demoUsers)
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('Users', {})
  },
}
