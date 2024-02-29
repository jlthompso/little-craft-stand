import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ProductDetailsCell from 'src/components/ProductDetailsCell'

const ProductDetailsPage = ({ id }) => {
  return (
    <>
      <Metadata title="ProductDetails" description="ProductDetails page" />

      <ProductDetailsCell id={id} />
    </>
  )
}

export default ProductDetailsPage
