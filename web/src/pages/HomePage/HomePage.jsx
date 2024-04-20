import { useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import ProductCardsCell from 'src/components/ProductCardsCell'

const HomePage = () => {
  useEffect(() => {
    document.addEventListener('snipcart.ready', () => {
      // You can safely use window.Snipcart here
      window.Snipcart.events.on('cart.confirmed', (cartConfirmResponse) => {
        cartConfirmResponse.items.items.forEach((item) => {
          console.log(item.id, item.quantity)
        })
      })

      window.Snipcart.events.on('cart.confirm.error', (confirmError) => {
        console.log(confirmError)
      })
    })
  }, [])

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <ProductCardsCell />
    </>
  )
}

export default HomePage
