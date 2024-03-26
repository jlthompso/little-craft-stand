import { useEffect, useState } from 'react'

import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
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
  const [dbRef, setDbRef] = useState(null)
  const [crop, setCrop] = useState()

  useEffect(() => {
    if (props?.productImage?.url) {
      getDownloadURL(ref(storage, props.productImage.url)).then((url) => {
        setDbRef(url)
      })
    }
  }, [props])

  const onSubmit = (data) => {
    console.log(data)
    data.productId = parseInt(data.productId)
    if (data.productImage.length) {
      const imgRef = ref(storage, data.url)
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

        <FileField name="productImage" />

        {dbRef ? (
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img src={dbRef} alt={props.productImage.url} />
          </ReactCrop>
        ) : (
          'no image'
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
