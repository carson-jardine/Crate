// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// ShippingAddress type
const ShippingAddressType = new GraphQLObjectType({
  name: 'address',
  description: 'Shipping Address Type',

  fields: () => ({
    id: { type: GraphQLInt },
    street1: { type: GraphQLString },
    street2: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User shippingAddress type
const ShippingAddressType = new GraphQLObjectType({
  name: 'shippingAddressTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { ShippingAddressType, ShippingAddressTypesType }
