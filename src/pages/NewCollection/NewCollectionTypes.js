import React from 'react';
import './NewCollectionTypes.css';

const NewCollectionTypes = () => {
  return (
    <div className="NewCollectionTypes">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://headsupfortails.com/cdn/shop/files/food_icon_4159fc2a-af83-4b37-8d68-1f204e53f674.png?v=1694491592" alt="Beds" />
              </p>
              <p className="type_flt_title">Food</p>
            </a>
          </div>
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://headsupfortails.com/cdn/shop/files/treat_icon_06d1f16d-2ef3-4c4b-9a07-f2c31cb90fe3.png?v=1694491592" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">Treats</p>
            </a>
          </div>
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://headsupfortails.com/cdn/shop/files/cat_toys_icon_5b805310-c957-4ef0-951f-105e222bd74a.png?v=1694609661" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">Cat toys</p>
            </a>
          </div>
           <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://headsupfortails.com/cdn/shop/files/tshirts_icon_2.png?v=1694628758" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">T-Shirts</p>
            </a>
          </div>
         
        </div>
        <div className="swiper-button-prev swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-disabled="true"></div>
        <div className="swiper-button-next swiper-button-disabled" tabIndex="-1" role="button" aria-label="Next slide" aria-disabled="true"></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

export default NewCollectionTypes;
