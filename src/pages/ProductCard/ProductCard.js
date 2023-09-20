import React from 'react';
import './ProductCard.css';
import NewCollectionTypes from '../NewCollection/NewCollectionTypes';

const ProductCard = ({ product }) => {
  return (
    <section className="hm_custom_section" id="wholesom-id">
      <div className="page-width-container">
       

        {/* Loop items */}
        <div className="HPB_100">
          <div className="HPB_img_outer HPB_Grid_web_4 HPB_Grid_mobile_2">
            <a href="https://headsupfortails.com/products/saras-wholesome-grain-free-chicken-turkey-fresh-dog-food">
              <p>
                <picture>
                  <source
                    media="(min-width: 767px)"
                    loading="lazy"
                    srcSet={product.imageUrl}
                  />
                  <img
                    loading="lazy"
                    srcSet={product.imageUrl}
                    alt="Product 1"
                  />
                </picture>
              </p>
             
            </a>
          </div>

         
        </div>
        
      </div>
    </section>
  );
};

export default ProductCard;




