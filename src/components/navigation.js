import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navigation() {
    const [isopensidebarval,setisopensidebarval]= useState(false)
  return (
    <>
     <nav>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-sm-3 navpart1'>
                       <div className='catWrapper'>
                         <Button className='allcattab' onClick={()=>setisopensidebarval(!isopensidebarval)}>
                            <span className='icon'><IoMdMenu/></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon'><FaAngleDown/></span>
                        </Button>
                        <div className={`sidebarnav ${isopensidebarval===true ? 'open' : ''}`}>
                            <ul>
                                <li><Link to='/'><Button>Home</Button></Link></li>
                                <li> <Link to='/cat/Kids'><Button>Kids</Button></Link></li>
                                <li>  <Link to='/cat/boys'><Button>Boys</Button></Link></li>
                                <li> <Link to='/cat/Girls'><Button>Girls</Button></Link></li>
                                <li><Link to='/cat/Women'><Button>Women</Button></Link></li>
                                <li><Link to='/cat/Men'><Button>Men</Button></Link></li>
                            </ul>
                        </div>
                       </div>
                        </div>

                    <div className='col-sm-9 navpart2 d-flex align-items-center'>
                        <ul className='list list-inlineml-auto'>
                            <li className='list-inline-item'><Link to="/">Home</Link></li>
                            <li className='list-inline-item'><Link to="/cat/kids">Kids</Link></li>
                            <li className='list-inline-item'><Link to="/cat/Boys">Boys</Link></li>
                            <li className='list-inline-item'><Link to="/cat/Girls">Girls</Link></li>
                            <li className='list-inline-item'><Link to="/cat/Women">Women</Link></li>
                            <li className='list-inline-item'><Link to="/cat/Men">Men</Link></li>
                            <li className='list-inline-item'><Link to="/">Contect us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation