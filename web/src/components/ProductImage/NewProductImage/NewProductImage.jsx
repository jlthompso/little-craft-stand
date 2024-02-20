import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import ProductImageForm from 'src/components/ProductImage/ProductImageForm'

const CREATE_PRODUCT_IMAGE_MUTATION = gql`
  mutation CreateProductImageMutation($input: CreateProductImageInput!) {
    createProductImage(input: $input) {
      id
    }
  }
`

const NewProductImage = () => {
  const [createProductImage, { loading, error }] = useMutation(
    CREATE_PRODUCT_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductImage created')
        navigate(routes.productImages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProductImage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProductImage</h2>
      </header>
      <div className="rw-segment-main">
        <ProductImageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProductImage
