import { SelectField } from '@redwoodjs/forms'

export const QUERY = gql`
  query FindProductSelectOptions {
    products {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ products, name, defaultValue }) => {
  return (
    <SelectField name={name}>
      {products.map((product) => (
        <option key={product.id} value={product.id} defaultValue={defaultValue}>
          {product.name}
        </option>
      ))}
    </SelectField>
  )
}
