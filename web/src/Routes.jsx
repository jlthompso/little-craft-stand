// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProductImages" titleTo="productImages" buttonLabel="New ProductImage" buttonTo="newProductImage">
        <Route path="/product-images/new" page={ProductImageNewProductImagePage} name="newProductImage" />
        <Route path="/product-images/{id}/edit" page={ProductImageEditProductImagePage} name="editProductImage" />
        <Route path="/product-images/{id}" page={ProductImageProductImagePage} name="productImage" />
        <Route path="/product-images" page={ProductImageProductImagesPage} name="productImages" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
