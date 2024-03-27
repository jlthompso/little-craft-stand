import { useEffect, useState } from 'react'

import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
} from 'firebase/storage'
import ReactCrop from 'react-image-crop'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  FileField,
} from '@redwoodjs/forms'

import ProductSelectFieldCell from 'src/components/ProductSelectFieldCell'
import { storage } from 'src/lib/firebase'
import 'react-image-crop/dist/ReactCrop.css'

const ProductImageForm = (props) => {
  const [src, setSrc] = useState(null)
  const [crop, setCrop] = useState()
  const [image, setImage] = useState(null)

  const selectImage = (file) => {
    setSrc(URL.createObjectURL(file))
  }

  const cropImageNow = () => {
    const canvas = document.createElement('canvas')
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    const pixelRatio = window.devicePixelRatio
    canvas.width = crop.width * pixelRatio
    canvas.height = crop.height * pixelRatio
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    ctx.imageSmoothingQuality = 'high'

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    return canvas.toDataURL('image/jpeg')
  }

  useEffect(() => {
    if (props?.productImage?.url) {
      getDownloadURL(ref(storage, props.productImage.url)).then((url) => {
        setSrc(url)
      })
    }
  }, [props])

  const onSubmit = (data) => {
    data.productId = parseInt(data.productId)
    const imgRef = ref(storage, data.url)
    if (crop) {
      uploadString(imgRef, cropImageNow(), 'data_url')
    } else if (data.productImage.length) {
      uploadBytes(imgRef, data.productImage.item(0))
    }
    props.onSave(data, props?.productImage?.id)
    delete data.productImage
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.productImage?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>

        <ProductSelectFieldCell
          name="productId"
          defaultValue={props.productImage?.productId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="productId" className="rw-field-error" />

        <Label
          name="productImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Upload Photo
        </Label>

        <FileField
          name="productImage"
          accept="image/*"
          onChange={(e) => selectImage(e.target.files[0])}
        />

        <br />

        {src && (
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img
              src={src}
              alt={props.productImage?.url}
              onLoad={(e) => setImage(e.target)}
            />
          </ReactCrop>
        )}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductImageForm
