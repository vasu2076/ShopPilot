import React, { useContext} from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Quantitybox from "./Quantitybox";

import { mycontext } from "../App";
import ProductZoom from "./productzoom"; 

function ProductModal(props) {
  const context = useContext(mycontext);
  

  return (
    <Dialog open={true} className="productmodal" onClose={() => context.setisopenproductModal(false)}>

      <Button className="close" onClick={() => context.setisopenproductModal(false)}>
        <RiCloseLargeFill />
      </Button>

      <h4 className="mb-3 font-weight-bold">
      {(props.data?.name || "").substr(0, 75) + "..."}
      </h4>

      <div className="d-flex align-items-center mt-3">
        <div className="d-flex align-items-center mr-4 gap-2">
          <span>Brands:</span>
          <span className="ml-5">
            <b>{props.data.brand}</b>
          </span>
        </div>
    <Rating
  name="read-only"
  value={parseFloat(props.data?.rating) || 0}
  size="large"
  precision={0.5}
  readOnly
  style={{ marginLeft: '20px' }}
/>

      </div>

      <hr />

      <div className="row mt-3 productDetailmodal">
        <div className="col-md-5">
          <div className="productzoom">
            <ProductZoom images={props?.data?.images} discount={props?.data?.discount}/>
          </div>
        </div>

        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3 gap-2">
            <span className="oldprice lg">RS {props.data.Oldprice}</span>
            <span className="newprice text-danger ml-2 lg">RS {props.data.price}</span>
          </div>
          <span className="badge bg-success">In Stock</span>

          <div className="d-flex align-items-center mr-4 gap-2 mt-3">
            <span>Size:</span>
            <span className="ml-5"><b>{props.data.productSize}</b></span>
          </div>

          <p className="mt-3 mb-4">
         {(props.data?.description || "").substr(0, 400) + "..."}
          </p>

          <div className="d-flex align-items-center">
            <Quantitybox />
            <Button className="btn-blue btn-lg btn-big btn-round ml-3">
              Add to cart
            </Button>
          </div>

          <div className="d-flex align-items-center mt-5 actions gap-3">
            <Button className="btn-round btn-sml" variant="outlined">
              <FaHeart /> &nbsp; Add to Wishlist
            </Button>
            <Button className="btn-round btn-sml ml-3" variant="outlined">
              <MdOutlineCompareArrows /> &nbsp; Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ProductModal;
