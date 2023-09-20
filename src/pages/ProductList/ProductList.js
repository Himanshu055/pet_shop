// In ProductList.js

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import NewCollectionTypes from '../NewCollection/NewCollectionTypes';

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      <NewCollectionTypes />
      <div className='all_data'  >
      <img
        src='https://headsupfortails.com/cdn/shop/files/food_strip_web_a0680060-8e2b-4699-bac0-28e99d236dc0.png?v=1694610307'
        className='food_strip'
        alt='Food Strip'
      />
      <div className="HPB_100 heading-container">
        <div className="HPB_heading_outer">
          <h3 className="heading">TRY SARA’S WHOLESOME FOOD</h3>
        </div>
      </div>
      <div className="product-list"  > 
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    <img className='food_strip' src='https://headsupfortails.com/cdn/shop/files/Frame_1171280144-2_1.png?v=1692877848' style={{marginTop:'-4%'}} />
    </div>
  );
};

export default ProductList;
