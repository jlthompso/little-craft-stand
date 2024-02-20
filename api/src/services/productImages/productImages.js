import { db } from 'src/lib/db'

export const productImages = () => {
  return db.productImage.findMany()
}

export const productImage = ({ id }) => {
  return db.productImage.findUnique({
    where: { id },
  })
}

export const createProductImage = ({ input }) => {
  return db.productImage.create({
    data: input,
  })
}

export const updateProductImage = ({ id, input }) => {
  return db.productImage.update({
    data: input,
    where: { id },
  })
}

export const deleteProductImage = ({ id }) => {
  return db.productImage.delete({
    where: { id },
  })
}

export const ProductImage = {
  Product: (_obj, { root }) => {
    return db.productImage.findUnique({ where: { id: root?.id } }).Product()
  },
}
