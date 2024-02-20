import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PRODUCT_IMAGE_MUTATION = gql`
  mutation DeleteProductImageMutation($id: String!) {
    deleteProductImage(id: $id) {
      id
    }
  }
`

const ProductImage = ({ productImage }) => {
  const [deleteProductImage] = useMutation(DELETE_PRODUCT_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('ProductImage deleted')
      navigate(routes.productImages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete productImage ' + id + '?')) {
      deleteProductImage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductImage {productImage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productImage.id}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{productImage.url}</td>
            </tr>
            <tr>
              <th>Product id</th>
              <td>{productImage.productId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductImage({ id: productImage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productImage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProductImage
