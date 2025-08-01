import ProductZoom from "../components/productzoom"
import Rating from '@mui/material/Rating';
import Quantitybox from "../components/Quantitybox";
import Button from '@mui/material/Button';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mycontext } from "../App";
import { cartdata, fetchDataFromApi } from "../utils/api";

const ProductDetails = () =>{
    const context = useContext(mycontext);
    const {id} = useParams();
    const [productdata,setproductdata] = useState()
    let  [productquantity,setproductquantity] = useState(1)
    useEffect(() => {
  fetchDataFromApi(`/products/${id}`).then((res) => {
    setproductdata(res);
  });
}, [id]); 


   useEffect(()=>{
        context.setIsHideSidebarAndHeader(false)
    },[]);

    const quantity=(val)=>{
       setproductquantity(val)
    }
    const handleAddToCart = async () => {
     if(context.islogin !== true){
       alert("Please login to add items to cart.");
     }else{
        try {
    const formData = {
      productId: productdata?._id,
      quantity: productquantity || 1,
    };

    const res = await cartdata("/cart/add", formData);
    console.log("Cart added:", res);
    alert("Product added to cart!");
  } catch (error) {
    console.error("Cart Add Error:", error);
    alert("Failed to add product to cart.");
  } 
};
     }

    return (
        <>
        {productdata &&
                       <section className="productdetails section">
            <div className="container">
               <div className="row">
                <div className="col-md-4 pl-5">
                    <ProductZoom images={productdata?.images} discount={productdata?.discount}/>
                </div>

                <div className="col-md-7 pl-5 pr-5">
                <h2 className="hd text-capitalize">{productdata?.name}</h2>
                <ul className="list list-inline d-flex align-items-center gap-3">
                    <li className="list-inline-item">
                       <div className="d-flex align-items-center gap-2">
                       <span className="mr-2">Brands :</span>
                       <span><b>{productdata?.brand}</b></span>
                       </div> 
                    </li> 
                
                    <li className="list-inline-item">
                        <div className="d-flex align-items-center">
                         <Rating  name="read-only" value={productdata.rating}  size='large' precision={0.5} readOnly/>
                         <span className="text-light cursor ml-2"> 1 Review</span>
                        </div>
                        </li>
                </ul>

                    <div className="d-flex info gap-3">
                    <span className='oldprice'>₹ {productdata?.Oldprice}</span>
                    <span className='newprice  text-danger ml-2 '>₹ {productdata?.price}</span>
                    </div>
                    <span className='badge bg-success'>In Stock</span>

                    <p className="mt-3">{productdata?.description}</p>
                    <div className="d-flex align-items-center gap-2">
                       <span className="mr-2">Size :</span>
                       <span><b>{productdata?.productSize}</b></span>
                       </div> 

                    <div className="d-flex align-items-center mt-4 gap-4">
                     <Quantitybox
                        quantity={(item, val) => setproductquantity(val)}
                        item={productdata}
                        initialQuantity={productquantity}/>

                       <br/>
                        <Button className="btn-blue btn-lg btn-big btn-round" onClick={handleAddToCart}><FaCartShopping /> &nbsp; Add to cart</Button>
                        <Tooltip title="Add to Wishlist" placement="top">
                        <button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart/></button>
                        </Tooltip>
                        <Tooltip title="Compare" placement="top">
                        <button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaCartShopping/></button>
                        </Tooltip>
                    </div>
                    </div>
               </div>
            </div>
           </section>
}
        </>
    )
}

export default ProductDetails