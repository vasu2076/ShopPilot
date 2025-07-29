import React, { useContext, useEffect } from 'react'
import HeroSlider from '../components/HeroSlider'
import Button from '@mui/material/Button'
import { FaArrowRight } from "react-icons/fa";
import Bestselling from '../components/BestSelling';
import NewsLetter from '../components/Newsletter';
import ProductItem from '../components/productitem';
import Product from '../components/product';
import Testimonial from '../components/Testimonial';
import { mycontext } from '../App';
function Home() {

  const context = useContext(mycontext)
   useEffect(()=>{
        context.setIsHideSidebarAndHeader(false)
    },[]);
   
  return (

    <>
    <HeroSlider/>

<section className="homeproducts">
  <div className="container contai">
    <div className="row">
      <div className="col-md-12">
        <div className="info-header d-flex justify-content-between align-items-center">
          <div>
            <h3>Best Selling Product</h3>
            <p className="text-dark">
              Do not miss the current offers until the end of this month
            </p>
          </div>
          <Button className=" viewall ml-auto"
            endIcon={<FaArrowRight />}
          >
            View All
          </Button>
        </div>
        <Bestselling/>
      </div>
    </div>
  </div>
</section>

<Testimonial/>

 <section className="homeproducts">
  <div className="container contai">
    <div className="row">
      <div className="col-md-12">
        <div className="info-header d-flex justify-content-between align-items-center">
          <div>
            <h3>our Product</h3>
            <p className="text-dark">
              Do not miss the current offers until the end of this month
            </p>
          </div>
          <Button className=" viewall ml-auto"
            endIcon={<FaArrowRight />}
          >
            View All
          </Button>
        </div>

       <div className="product_row productrow2 w-100 mt-4 d-flex ">
        <Product/>
        </div>
      </div>
    </div>
  </div>
</section> 

  <NewsLetter/>

    </>
  )
}

export default Home