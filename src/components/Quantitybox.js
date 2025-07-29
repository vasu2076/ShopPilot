import { FaRegWindowMinimize } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';  
import { useEffect, useState } from "react";

 const Quantitybox = (props) =>{

    const [inputval , setinputval]  =useState(1)
    const minus = ()=>{
        if(inputval>1){
            setinputval(inputval-1)
        }
    }
    const plus = ()=>{
        setinputval(inputval + 1)
    }

   useEffect(() => {
    if (typeof props.quantity === 'function') {
        props.quantity(props.item, inputval); // only one unified handler
    }
}, [inputval]);


    return(
        <>
        <div className='quantitydrop d-flex align-items-center'>
        <Button onClick={minus}><FaRegWindowMinimize/></Button>
        <input type='text' value={inputval}/>
        <Button onClick={plus}><FaPlus/></Button>
    </div>
    </>
    )
 }

 export default Quantitybox