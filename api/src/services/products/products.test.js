import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async () => {
    const result = await createProduct({
      input: {
        name: 'String6261436',
        price: 1847591.0723478473,
        weightInPounds: 4501582.511077553,
        widthInInches: 2499466.6141018397,
        lengthInInches: 7993011.5406285515,
        heightInInches: 3488421.9297290575,
      },
    })

    expect(result.name).toEqual('String6261436')
    expect(result.price).toEqual(1847591.0723478473)
    expect(result.weightInPounds).toEqual(4501582.511077553)
    expect(result.widthInInches).toEqual(2499466.6141018397)
    expect(result.lengthInInches).toEqual(7993011.5406285515)
    expect(result.heightInInches).toEqual(3488421.9297290575)
  })

  scenario('updates a product', async (scenario) => {
    const original = await product({ id: scenario.product.one.id })
    const result = await updateProduct({
      id: original.id,
      input: { name: 'String41664622' },
    })

    expect(result.name).toEqual('String41664622')
  })

  scenario('deletes a product', async (scenario) => {
    const original = await deleteProduct({
      id: scenario.product.one.id,
    })
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
