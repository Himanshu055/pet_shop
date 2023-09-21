import React,{useState} from 'react'
import './Home.css'
import Slider from '../ProductCard/ProductCard';
import ProductList from '../ProductList/ProductList';
import products from '../../DummyData/data';

function Home() {

    const [sliderIndex, setSliderIndex] = useState(0);

  const moveSlider = (direction) => {
    if (direction === 'left') {
      setSliderIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    } else if (direction === 'right') {
      setSliderIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }
  };


 
  return (
    <>
    
    <section className="hero">
    <div className="hero-content">
     
    </div>
  </section>



<ProductList products={products} />


 <h3 className='service'>YOUR PET’S DAILY NEEDS</h3>
 <section className="product-section">
      <div className="product-container">
        <div className="product-item">
          <a href="#">
            <img
              src="//headsupfortails.com/cdn/shop/files/c3_harness.png?v=1694493183"
              alt="Harnesses"
            />
            <h4>Harnesses</h4>
          </a>

          
        </div>

        <div className="product-item">
          <a href="#">
            <img
              src="https://headsupfortails.com/cdn/shop/files/c7_toys.png?v=1694493183"
              alt="Harnesses"
            />
            <h4>Toys</h4>
          </a>

          
        </div>
        <div className="product-item">
          <a href="#">
            <img
              src="https://headsupfortails.com/cdn/shop/files/c11_grooming.png?v=1694493183"
              alt="Harnesses"
            />
            <h4>Gromming</h4>
          </a>

          
        </div>
        
        

      </div>
    </section>



    </>
  )
}

export default Home