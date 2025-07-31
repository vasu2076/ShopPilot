import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartshowdata, deleteData, fetchDataFromApi } from '../utils/api';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { mycontext } from '../App';


const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    cartshowdata("/cart").then((res) => {
      setCartItems(res);
    });
  }, []);

  const context = useContext(mycontext)
   useEffect(()=>{
        context.setIsHideSidebarAndHeader(false)
    },[]);

  if (!cartItems || cartItems.length === 0) return <p className="text-center mt-5">Cart is empty.</p>;

  const getTotalPrice = () => {
  return cartItems.reduce((total, item) => {
    return total + ((item.productId?.price || 0) * item.quantity);
  }, 0);
};

   const Deleteproduct = (_id)=> {
      deleteData(`/cart/${_id}`).then((res)=>{
        cartshowdata("/cart").then((res) => {
      setCartItems(res);
    });
      })
    }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Shopping Cart</h2>

      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div className="card mb-3" key={item._id}>
              <div className="row g-0">
                <div className="col-md-4">
                 <img
                  src={item.productId?.images?.[0]}
                  className="img-fluid"
                  alt={item.productId?.name || 'Product image'}
                />

                </div>
                <div className="col-md-8">
                  <div className="card-body">
                   <h5 className="card-title">
                    {item.productId?.name?.substr(0, 70) + "..."}
                  </h5>

                    <p className="card-text">
                    <b>RS {item.productId?.price} × {item.quantity} Quantity</b>
                  </p>

                   <p className="card-text">
                    <strong>Total: RS {((item.productId?.price || 0) * item.quantity).toFixed(2)}</strong>
                  </p>

                    <button className="btn btn-danger"  onClick={handleClickOpen}>Remove</button>
                     <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className='mx-20'
      >
        <DialogTitle>{"Remove Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <b>
           Are you sure you want to remove this item?
            </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => {
          Deleteproduct(item._id);
         handleClose();
  }} sx={{backgroundColor: 'green', color: 'white','&:hover': { backgroundColor: '#006400',},}}>
        Yes
      </Button>

<Button onClick={handleClose} sx={{ backgroundColor: 'red',color: 'white','&:hover': {backgroundColor: '#8B0000', },}}>
  No
</Button>
        </DialogActions>
      </Dialog>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h4>Order Summary</h4>
            <p>Total Items: {cartItems.reduce((sum, i) => sum + i.quantity, 0)}</p>
            <p>
              <strong>Total Price: RS {getTotalPrice().toFixed(2)}</strong>
            </p>
            <Link  className="btn w-100 btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
