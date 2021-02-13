'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    },
    orderStatus: {
      type: DataTypes.STRING
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Product.associate = function(models) {
    Product.belongsToMany(models.Crate, {through: models.CrateProducts})

  }
}
