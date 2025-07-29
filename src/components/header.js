import React, { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { FaRegUser } from "react-icons/fa";
import CountryDropDown from './countrydropdown';
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from './searchbox';
import Navigation from './navigation';
import { mycontext } from '../App';


function Header() {

  const context = useContext(mycontext)
  return (
    <>
      <div className="headerWrapper">
        <header className="header">
          <div className="container contai">
            <div className="row align-items-center">
              <div className="logoWrapper col-sm-2 d-flex align-items-center">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                  <h3>ShopPilot</h3>
              </div>

              <div className="part2 col-sm-10 d-flex align-items-center justify-content-start">
                {
                  context.countrylist.length!==0 && <CountryDropDown/>
                }
              
              <SearchBox/>


              <div className='part3 d-flex align-items-center ml-auto'>
                          {
            context.islogin !== true ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-big btn-round signin">Sign in</Button>
              </Link>
            ) : (
              <>
                <Button className='circle'><FaRegUser/> </Button>
                <div className='ml-auto carttab'>
                    <span className='price'>RS 500.00</span>
                    <Button className='circle'><MdOutlineShoppingCart /></Button>
                </div>
              </>
            )}
              </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation/>
      </div>
    </>
  );
}


export default Header