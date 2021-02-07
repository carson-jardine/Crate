'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }

    // add deliveryDate DataTypes.DATE()
  })

  // This is where we define the relationships.
  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}