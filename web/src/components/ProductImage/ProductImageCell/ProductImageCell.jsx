import ProductImage from 'src/components/ProductImage/ProductImage'

export const QUERY = gql`
  query FindProductImageById($id: String!) {
    productImage: productImage(id: $id) {
      id
      url
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProductImage not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ productImage }) => {
  return <ProductImage productImage={productImage} />
}
