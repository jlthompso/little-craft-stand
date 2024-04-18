import { useEffect, useState } from 'react'

import { ref, getDownloadURL } from 'firebase/storage'

import { storage } from 'src/lib/firebase'

const DbProductImage = (props) => {
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (props.dbUrl || props.product?.images.length > 0) {
      getDownloadURL(
        ref(storage, props.dbUrl || props.product?.images[0].url)
      ).then((url) => {
        setUrl(url)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [props])

  if (url === null && !loading) {
    return (
      <div className="loader__container">
        <svg
          className="placeholder__image"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </g>
        </svg>
      </div>
    )
  } else if (loading) {
    return (
      <div className="loader__container">
        <div className="loader"></div>
      </div>
    )
  } else {
    return (
      <img
        src={url}
        alt={props.dbUrl || props.product?.images[0].url}
        className={props.thumbnail ? 'thumbnail-image' : 'image'}
        onClick={props.onClick}
      />
    )
  }
}

export default DbProductImage
