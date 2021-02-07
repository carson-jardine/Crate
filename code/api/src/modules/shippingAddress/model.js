'use strict'

// ShippingAddress
module.exports = function(sequelize, DataTypes) {
  let ShippingAddress = sequelize.define('shippingAddress', {
    street1: {
      type: DataTypes.STRING
    },
    street2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    }
  })

  ShippingAddress.associate = function(models) {
    ShippingAddress.belongsTo(models.User)

  }

  return ShippingAddress
}
