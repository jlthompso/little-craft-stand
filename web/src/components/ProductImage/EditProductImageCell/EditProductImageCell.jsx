import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductImageForm from 'src/components/ProductImage/ProductImageForm'

export const QUERY = gql`
  query EditProductImageById($id: String!) {
    productImage: productImage(id: $id) {
      id
      url
      productId
    }
  }
`

const UPDATE_PRODUCT_IMAGE_MUTATION = gql`
  mutation UpdateProductImageMutation(
    $id: String!
    $input: UpdateProductImageInput!
  ) {
    updateProductImage(id: $id, input: $input) {
      id
      url
      productId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ productImage }) => {
  const [updateProductImage, { loading, error }] = useMutation(
    UPDATE_PRODUCT_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductImage updated')
        navigate(routes.productImages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProductImage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductImage {productImage?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductImageForm
          productImage={productImage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
