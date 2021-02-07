// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ShippingAddressType } from './types'
import { create, update, remove } from './resolvers'

// ShippingAddress create
export const shippingAddressCreate = {
  type: ShippingAddressType,
  args: {
    street1: {
      name: 'street1',
      type: GraphQLString
    },

    street2: {
      name: 'street2',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    zip: {
      name: 'zip',
      type: GraphQLString
    }
  },
  resolve: create
}

// ShippingAddress update
export const shippingAddressUpdate = {
  type: ShippingAddressType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    street1: {
      name: 'street1',
      type: GraphQLString
    },

    street2: {
      name: 'street2',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    zip: {
      name: 'zip',
      type: GraphQLString
    }
  },
  resolve: update
}

// ShippingAddress remove
export const shippingAddressRemove = {
  type: ShippingAddressType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
