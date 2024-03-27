import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import DbProductImage from 'src/components/DbProductImage/DbProductImage'

const ProductForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.product?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.product?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.product?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="quantityInStock"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity in stock
        </Label>

        <NumberField
          name="quantityInStock"
          defaultValue={props.product?.quantityInStock}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantityInStock" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.product?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="weightInPounds"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weight in pounds
        </Label>

        <TextField
          name="weightInPounds"
          defaultValue={props.product?.weightInPounds}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="weightInPounds" className="rw-field-error" />

        <Label
          name="widthInInches"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Width in inches
        </Label>

        <TextField
          name="widthInInches"
          defaultValue={props.product?.widthInInches}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="widthInInches" className="rw-field-error" />

        <Label
          name="lengthInInches"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Length in inches
        </Label>

        <TextField
          name="lengthInInches"
          defaultValue={props.product?.lengthInInches}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="lengthInInches" className="rw-field-error" />

        <Label
          name="heightInInches"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Height in inches
        </Label>

        <TextField
          name="heightInInches"
          defaultValue={props.product?.heightInInches}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="heightInInches" className="rw-field-error" />

        <h4>Product Images</h4>
        <div className="image-gallery__container">
          {props.product?.images.map((image) => (
            <div key={image.id} className="thumbnail-image__container">
              <DbProductImage dbUrl={image.url} />
            </div>
          ))}
        </div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductForm
