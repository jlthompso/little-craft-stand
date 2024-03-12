import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link
        to={routes.productDetails({ id: product.id })}
        title={'Show product ' + product.id + ' detail'}
        className="card__link"
      >
        <img
          src="https://placehold.co/200x200"
          alt={product.name}
          className="image"
        />
      </Link>

      <Link
        to={routes.productDetails({ id: product.id })}
        title={'Show product ' + product.id + ' detail'}
        className="card__link"
      >
        {product.name}
      </Link>

      <p className="card__price">
        {'$' + Number.parseFloat(product.price).toFixed(2)}
      </p>

      <p>{truncate(product.description)}</p>

      <p>
        <button
          className="card__button"
          disabled={product.quantityInStock <= 0}
        >
          Add to Cart
        </button>
      </p>
    </div>
  )
}

export default ProductCard
