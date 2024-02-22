import { Metadata } from '@redwoodjs/web'

import ProductCardsCell from 'src/components/ProductCardsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <ProductCardsCell />
    </>
  )
}

export default HomePage
