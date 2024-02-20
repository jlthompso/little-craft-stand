export const schema = gql`
  type ProductImage {
    id: String!
    url: String!
    Product: Product
    productId: Int
  }

  type Query {
    productImages: [ProductImage!]! @requireAuth
    productImage(id: String!): ProductImage @requireAuth
  }

  input CreateProductImageInput {
    url: String!
    productId: Int
  }

  input UpdateProductImageInput {
    url: String
    productId: Int
  }

  type Mutation {
    createProductImage(input: CreateProductImageInput!): ProductImage!
      @requireAuth
    updateProductImage(
      id: String!
      input: UpdateProductImageInput!
    ): ProductImage! @requireAuth
    deleteProductImage(id: String!): ProductImage! @requireAuth
  }
`
