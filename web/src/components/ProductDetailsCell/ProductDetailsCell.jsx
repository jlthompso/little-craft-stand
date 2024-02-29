export const QUERY = gql`
  query ProductDetailsQuery($id: Int!) {
    product: product(id: $id) {
      id
      name
      price
      quantityInStock
      description
      weightInPounds
      widthInInches
      lengthInInches
      heightInInches
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ product }) => {
  return (
    <div className="product-details__container">
      <h1>{product.name}</h1>
      <img
        src="https://placehold.co/200x200"
        alt={product.name}
        className="image"
      />
      <p>{product.description}</p>
    </div>
  )
}
