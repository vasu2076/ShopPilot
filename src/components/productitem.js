import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { mycontext } from "../App";

const ProductItem = ({ productView, filterdata }) => {
const context = useContext(mycontext)

  const viewProductDetails= (_id)=>{
    context.setisopenproductModal({
      _id:_id,
      open:true
    })
  }

  return (
  <>   
 {Array.isArray(filterdata) && filterdata.length > 0 ? (
        filterdata.map((item) => (
          <div className={`productitem ${productView}`} key={item._id}>
            <div className="imgwrapper">
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-100"
                />
              </Link>
              <span className="badge badge-primary">{item.discount}%</span>
              <div className="action">
                <Button onClick={() => viewProductDetails(item._id)}><BsArrowsFullscreen /></Button>
                <Button><CiHeart style={{ fontSize: "20px" }} /></Button>
              </div>
            </div>
            <div className="info">
              <h4>{item.name.substr(0, 30) + "..."}</h4>
              <span className="text-success d-block">In Stock</span>
              <Rating
                className="mt-2 mb-2"
                name="read-only"
                value={item.rating}
                readOnly
                size="small"
                precision={0.5}
              />
              <div className="d-flex gap-2">
                <span className="oldprice">RS {item.Oldprice}</span>
                <span className="newprice text-danger ml-2">RS {item.price}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </>
  );
};

export default ProductItem;
