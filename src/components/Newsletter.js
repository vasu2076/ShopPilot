import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import coupon from "../assets/images/coupon.png";
import { Button } from '@mui/material';

const NewsLetter = () => {
  return (
   <section className='newslettersection mt-3 mb-3 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='text-white mb-1'>$250 discount for your first order</p>
                        <h4 className='text-white'>Join our newsletter and get...</h4>
                        <p className='text-white'>Join our email subscription now to get
                            updates on<br/>  promotions and coupons.</p>

                            <form>
                                <MdOutlineEmail/><input type='text' placeholder='Your Email Address' />
                                <Button>subscribe</Button>
                             </form>

                    </div>
                    <div className='col-md-6'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png'alt='img'></img>
                        </div>
                </div>
            </div>
        </section>
     
  );
};

export default NewsLetter;
