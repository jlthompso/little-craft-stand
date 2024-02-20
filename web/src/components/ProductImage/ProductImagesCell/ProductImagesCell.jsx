import { Link, routes } from '@redwoodjs/router'

import ProductImages from 'src/components/ProductImage/ProductImages'

export const QUERY = gql`
  query FindProductImages {
    productImages {
      id
      url
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productImages yet. '}
      <Link to={routes.newProductImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ productImages }) => {
  return <ProductImages productImages={productImages} />
}
