import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProductImage/ProductImagesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PRODUCT_IMAGE_MUTATION = gql`
  mutation DeleteProductImageMutation($id: String!) {
    deleteProductImage(id: $id) {
      id
    }
  }
`

const ProductImagesList = ({ productImages }) => {
  const [deleteProductImage] = useMutation(DELETE_PRODUCT_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('ProductImage deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete productImage ' + id + '?')) {
      deleteProductImage({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Product id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productImages.map((productImage) => (
            <tr key={productImage.id}>
              <td>{truncate(productImage.id)}</td>
              <td>{truncate(productImage.url)}</td>
              <td>{truncate(productImage.productId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productImage({ id: productImage.id })}
                    title={'Show productImage ' + productImage.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductImage({ id: productImage.id })}
                    title={'Edit productImage ' + productImage.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete productImage ' + productImage.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productImage.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductImagesList
