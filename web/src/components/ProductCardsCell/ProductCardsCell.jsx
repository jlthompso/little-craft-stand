import ProductCard from 'src/components/ProductCard'

export const QUERY = gql`
  query ProductCardsQuery {
    products {
      id
      name
      price
      quantityInStock
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ products }) => {
  return (
    <>
      <div className="grid--s grid--m grid--l">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </>
  )
}
