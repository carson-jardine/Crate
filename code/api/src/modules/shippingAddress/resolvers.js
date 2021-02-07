// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// TODO: Get subscription by user

// Create shippingAddress
export async function create(parentValue, { street1, street2, city, state, zip }, { auth }) {
  if(auth.user) {
    return await models.ShippingAddress.create({
      street1,
      street2,
      city,
      state,
      zip
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update shippingAddress
export async function update(parentValue, { street1, street2, city, state, zip }, { auth }) {
  if(auth.user) {
    return await models.ShippingAddress.update({
      street1,
      street2,
      city,
      state,
      zip
    },
    { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete shippingAddress
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user) {
    const shippingAddress = await models.ShippingAddress.findOne({where: {id}})

    if (!shippingAddress) {
      // ShippingAddress does not exists
      throw new Error('Unknown address')
    } else {
      return await models.ShippingAddress.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation denied.')
  }
}

// ShippingAddress types
export async function getTypes() {
  return Object.values(params.shippingAddress.types)
}
