import React from 'react'
//Home 
const Home = () => {
  return (
    <>
    HeroBanner

    <div className="product-heading">
      <h2>BEST SELLING PRODUCTS</h2> 
      <p>Speakers of many variations</p>
   </div>

   <div className="products-container">
    {[
    'Product 1', 'Product 2'].map(
      (product) => product)}
   </div>

   Footer 
    </>
  )
}

export default Home; 