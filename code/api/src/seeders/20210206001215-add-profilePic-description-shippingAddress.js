'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Tommy MySpace boy',
        email: 'tom@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date(),
        profilePic: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
        description: 'I am Tom from MySpace and I got style.',
        shippingAddress: '1234 Cool Guy Way, Denver, CO, 80216'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}