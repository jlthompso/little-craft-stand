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
      <div className="product-details__column">
        <img
          src="https://placehold.co/200x200"
          alt={product.name}
          className="image"
        />
      </div>
      <div className="product-details__column">
        <h1>{product.name}</h1>
        <h2>{'$' + Number.parseFloat(product.price).toFixed(2)}</h2>
        <span>
          <input
            className="number-input"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max={product.quantityInStock}
            defaultValue="1"
          />
          <button className="button">Add to Cart</button>
        </span>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
