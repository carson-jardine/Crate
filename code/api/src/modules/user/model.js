'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  // This is where we define the relationships.
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
  // add description DataTypes.TEXT
  // add shippingAddress DataTypes.TEXT
  // add profilePicture DataTypes.TEXT
  return User
}