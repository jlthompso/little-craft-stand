import { Link, routes } from '@redwoodjs/router'

import DbProductImage from 'src/components/DbProductImage'
import { truncate } from 'src/lib/formatters'
import { inchesToCentimeters, poundsToGrams } from 'src/lib/formatters'

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link
        to={routes.productDetails({ id: product.id })}
        title={'Show product ' + product.id + ' detail'}
        className="card__link"
      >
        <DbProductImage product={product} />
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
          className="card__button snipcart-add-item"
          disabled={product.quantityInStock <= 0}
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-description={product.description}
          data-item-image={product.images[0]?.url}
          data-item-name={product.name}
          data-item-url={`${process.env.REDWOOD_ENV_API_URL}/validateProduct?id=${product.id}`}
          data-item-max-quantity={product.quantityInStock}
          data-item-weight={poundsToGrams(product.weightInPounds)}
          data-item-length={inchesToCentimeters(product.lengthInInches)}
          data-item-height={inchesToCentimeters(product.heightInInches)}
          data-item-width={inchesToCentimeters(product.widthInInches)}
        >
          Add to Cart
        </button>
      </p>
    </div>
  )
}

export default ProductCard
