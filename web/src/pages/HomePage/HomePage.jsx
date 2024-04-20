import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProductCardsCell from 'src/components/ProductCardsCell'

const DECREMENT_PRODUCT_QUANTITY_MUTATION = gql`
  mutation DecrementProductQuantityMutation($id: Int!, $qty: Int!) {
    decrementProductQuantity(id: $id, qty: $qty) {
      id
      quantityInStock
    }
  }
`

const HomePage = () => {
  const [decrementProductQuantity, { loading, error }] = useMutation(
    DECREMENT_PRODUCT_QUANTITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Product inventory updated')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  useEffect(() => {
    document.addEventListener('snipcart.ready', () => {
      // You can safely use window.Snipcart here
      window.Snipcart.events.on('cart.confirmed', (cartConfirmResponse) => {
        cartConfirmResponse.items.items.forEach((item) => {
          decrementProductQuantity({
            variables: { id: parseInt(item.id), qty: item.quantity },
          })
        })
      })

      window.Snipcart.events.on('cart.confirm.error', (confirmError) => {
        console.log(confirmError)
      })
    })
  }, [decrementProductQuantity])

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <ProductCardsCell />
    </>
  )
}

export default HomePage
