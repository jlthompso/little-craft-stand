import { useState, useEffect } from 'react'

import { routes } from '@redwoodjs/router'

import { inchesToCentimeters, poundsToGrams } from 'src/lib/formatters'

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
  const [qty, setQty] = useState(product.quantityInStock > 0 ? 1 : 0)
  const [qtyInputVal, setQtyInputVal] = useState(qty)

  useEffect(() => {
    setQtyInputVal(qty)
  }, [qty])

  const handleChange = (e) => {
    if (e.target.value === '') {
      setQtyInputVal('')
    } else {
      const newQty = parseInt(e.target.value)
      if (newQty > 0 && newQty <= product.quantityInStock) {
        setQty(newQty)
      }
    }
  }

  const handleBlur = () => {
    setQtyInputVal(qty)
  }

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
        <div className="product-details__row">
          <div className="number-input-container">
            <button
              className="icon-button"
              onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
            >
              <svg
                viewBox="-3.2 -3.2 38.40 38.40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                  transform="translate(3.1999999999999993,3.1999999999999993), scale(0.8)"
                >
                  <rect
                    x="-3.2"
                    y="-3.2"
                    width="38.40"
                    height="38.40"
                    rx="19.2"
                    fill="#ffffff"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>minus-circle</title>{' '}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {' '}
                    <g
                      id="Icon-Set"
                      transform="translate(-516.000000, -1087.000000)"
                      fill="#000000"
                    >
                      {' '}
                      <path
                        d="M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 L532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 L532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 L538,1102 Z"
                        id="minus-circle"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </button>
            <input
              className="number-input"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={product.quantityInStock}
              value={qtyInputVal}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              className="icon-button"
              onClick={() =>
                setQty(qty < product.quantityInStock ? qty + 1 : qty)
              }
            >
              <svg
                viewBox="-3.2 -3.2 38.40 38.40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                stroke="#000000"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                  transform="translate(3.1999999999999993,3.1999999999999993), scale(0.8)"
                >
                  <rect
                    x="-3.2"
                    y="-3.2"
                    width="38.40"
                    height="38.40"
                    rx="19.2"
                    fill="#ffffff"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>plus-circle</title>{' '}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {' '}
                    <g
                      id="Icon-Set"
                      transform="translate(-464.000000, -1087.000000)"
                      fill="#000000"
                    >
                      {' '}
                      <path
                        d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
                        id="plus-circle"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
            </button>
          </div>
          <button
            className="button snipcart-add-item"
            disabled={product.quantityInStock <= 0}
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-description={product.description}
            data-item-image="https://placehold.co/200x200"
            data-item-name={product.name}
            data-item-url={routes.productDetails({ id: product.id })}
            data-item-quantity={qty}
            data-item-max-quantity={product.quantityInStock}
            data-item-weight={poundsToGrams(product.weightInPounds)}
            data-item-length={inchesToCentimeters(product.lengthInInches)}
            data-item-height={inchesToCentimeters(product.heightInInches)}
            data-item-width={inchesToCentimeters(product.widthInInches)}
          >
            Add to Cart
          </button>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
