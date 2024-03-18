import { useEffect, useState } from 'react'

import { ref, getDownloadURL } from 'firebase/storage'

import { storage } from 'src/lib/firebase'

const DbProductImage = ({ product }) => {
  const [url, setUrl] = useState('https://placehold.co/200x200')

  useEffect(() => {
    if (product.images.length > 0) {
      getDownloadURL(ref(storage, product.images[0].url)).then((url) =>
        setUrl(url)
      )
    }
  }, [product.images])

  return <img src={url} alt={product.name} className="image" />
}

export default DbProductImage
