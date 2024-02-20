import { Link, routes } from '@redwoodjs/router'

import Products from 'src/components/Product/Products'

export const QUERY = gql`
  query FindProducts {
    products {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No products yet. '}
      <Link to={routes.newProduct()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ products }) => {
  return <Products products={products} />
}
