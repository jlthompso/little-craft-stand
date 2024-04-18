export const schema = gql`
  type Product {
    id: Int!
    name: String!
    price: Float!
    quantityInStock: Int!
    description: String
    images: [ProductImage]!
    weightInPounds: Float!
    widthInInches: Float!
    lengthInInches: Float!
    heightInInches: Float!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: Int!): Product @skipAuth
  }

  input CreateProductInput {
    name: String!
    price: Float!
    quantityInStock: Int!
    description: String
    weightInPounds: Float!
    widthInInches: Float!
    lengthInInches: Float!
    heightInInches: Float!
  }

  input UpdateProductInput {
    name: String
    price: Float
    quantityInStock: Int
    description: String
    weightInPounds: Float
    widthInInches: Float
    lengthInInches: Float
    heightInInches: Float
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
