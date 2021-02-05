'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'profilePic',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        'users',
        'description',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        'users',
        'shippingAddress',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'profilePic'),
      queryInterface.removeColumn('users', 'description'),
      queryInterface.removeColumn('users', 'shippingAddress'),
    ]);
  }
};
