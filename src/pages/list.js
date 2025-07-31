import Button from '@mui/material/Button';
// import ProductItem from "../../components/productitem/product";
import { MdOutlineMenu } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import SideBar from '../components/slidebar';
import Bestselling from '../components/BestSelling';
import ProductItem from '../components/productitem';
import { catData } from '../utils/api';
import { mycontext } from '../App';


const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const[productView, setproductView] = useState('four')
    const opendrop = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {name} = useParams();
     const [filterdata,setfilterdata] =useState([])
    useEffect(()=>{
        if (name) {
           catData(`/products/cat?catName=${name}`).then((res) => {
             setfilterdata(res);
           });
        }
    },[name])

  const context = useContext(mycontext)
   useEffect(()=>{
        context.setIsHideSidebarAndHeader(false)
    },[]);

    return (
        <>
            <section className="product_listing_page">
                <div className="co">
                    <div className="productlisting d-flex">
                        <SideBar/>
                        <div className='content_right'>

                            <div className='showBy mt-3 mb-3 d-flex align-items-center'>
                                <div className='d-flex align-items-center btnwrapper'>
                                    <Button className ={productView === 'one' && "act"} onClick={()=>setproductView('one')}><MdOutlineMenu /></Button>
                                    <Button className ={productView === 'two' && "act"} onClick={()=>setproductView('two')}><BsFillGridFill /></Button>
                                    <Button className ={productView === 'three' && "act"} onClick={()=>setproductView('three')}><PiDotsNineBold /></Button>
                                    <Button className ={productView === 'four' && "act"} onClick={()=>setproductView('four')}><BsGrid3X3GapFill /></Button>
                                </div>

                                <div className='ml-auto showfilter '>
                                    <Button onClick={handleClick}>show 10<FaAngleDown /></Button>
                                    <Menu
                                        className='w-100 showpagedrop'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={opendrop}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className='productlisting'>
                              <ProductItem   productView={productView} filterdata={filterdata}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Listing;
