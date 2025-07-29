import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState, useEffect } from 'react';
import { Link } from '@mui/material';
import Rating from "@mui/material/Rating";

const SideBar = (props) => {
    const [value, setvalue] = useState([100, 60000]);
    const [value2, setvalue2] = useState(0);

    useEffect(() => {
        setvalue2(value[0]);
    }, [value]);

    const filterbyrating = (rating)=>{
        props.filterbyrating(rating)
    }
    return (
        <>
            <div className="slidebar">
                <div className="filtersbox">
                    <h5>Product Categories</h5>
                    <div className='scroll'>
                        <ul>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Kids" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Boys" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Girls" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Men" /></li>
                            <li><FormControlLabel className="w-100" control={<Checkbox />} label="Women" /></li>
                        </ul>
                    </div>
                </div>

                <div className="filtersbox2 mb-4">
                    <h5>Filter by price</h5>
                    <RangeSlider value={value} onInput={setvalue} min={100} max={25000} step={5} />
                    <div className='d-flex pt-2 pb-2 pricerange'>
                        <span>From: <strong className='c-blue'>Rs: {value[0]}</strong></span>
                        <span className='ml-auto'>From: <strong className='c-blue'>Rs: {value[1]}</strong></span>
                    </div>
                </div>

                <div className="filtersbox">
                 <h5></h5>
                 <ul>
                    <li> <Rating name="read-only" value={5} readOnly onClick={()=>filterbyrating(5)}/> </li>
                    <li> <Rating name="read-only" value={4} readOnly onClick={()=>filterbyrating(4)}/> </li>
                    <li> <Rating name="read-only" value={3} readOnly onClick={()=>filterbyrating(3)}/> </li>
                    <li> <Rating name="read-only" value={2} readOnly onClick={()=>filterbyrating(2)}/> </li>
                 </ul>
                </div>
               

            </div>
        </>
    );
};

export default SideBar;
