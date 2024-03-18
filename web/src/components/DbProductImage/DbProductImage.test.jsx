import { render } from '@redwoodjs/testing/web'

import DbProductImage from './DbProductImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DbProductImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DbProductImage />)
    }).not.toThrow()
  })
})
