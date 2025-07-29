import React, { useContext, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { mycontext } from "../App";
import { Link } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";


function Product() {
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
    setproducts(res);
  });
}, []);


  return (
    <>
          {products?.length !== 0 &&
            products?.map((item, index) => {
              return (
                  <div className="item productitem">
                    <div className="imgwrapper">
                       <Link to={`/product/${item?._id}`}>
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
                      <h4>{item.name.substr(0, 50) + "..."}</h4>
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
              );
            })}
    </>
  );
}

export default Product;