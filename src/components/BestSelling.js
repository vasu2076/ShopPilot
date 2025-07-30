import React, { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { mycontext } from "../App";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Bestselling() {
  const [products, setproducts] = useState([]);
  const context = useContext(mycontext);
 
  
   const viewProductDetails = (_id) => {
       context.setisopenproductModal({
        _id:_id,
        open:true
       });
     };
     
 useEffect(() => {
  fetchDataFromApi(`/products`).then((res) => {
    if (Array.isArray(res)) {
      const shuffled = [...res].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 8); 
      setproducts(selected);
    } else {
      console.error("Expected array but got:", res);
    }
  });
}, []);


  return (
    <>
      <div className="product_row w-100 mt-4">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={4}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          className="mySwiper">
          {products?.length !== 0 &&
            products?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="item productitem">
                    <div className="imgwrapper">
                       <Link to={`/product/${item._id}`}>
                        <img src={item.images[0]} className="w-100" />
                      </Link>
                      <span className="badge badge-primary">
                        {item.discount}%
                      </span>
                      <div className="action">
                        <Button onClick={() => viewProductDetails(item._id)}>
                          <BsArrowsFullscreen />
                        </Button>
                        <Button>
                          <LuHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="info">
                      <h4>{item.name.substr(0, 30) + "..."}</h4>
                      <span className="text-success d-block">In stock</span>
                      <Rating
                        name="half-rating-read"
                        defaultValue={item.rating}
                        precision={0.5}
                        readOnly
                        className="mt-2 mb-2"
                      />
                      <div className="d-flex gap-2">
                        <span className="oldprice">RS {item.Oldprice}</span>
                        <span className="newprice ml-3 text-danger">
                          RS {item.price}
                        </span>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default Bestselling;
