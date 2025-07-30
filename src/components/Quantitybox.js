import { FaRegWindowMinimize, FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';  
import { useEffect, useState } from "react";

const Quantitybox = (props) => {
  const { quantity, item, initialQuantity = 1 } = props;

  const [inputval, setInputval] = useState(initialQuantity);

  useEffect(() => {
    if (initialQuantity && inputval !== initialQuantity) {
      setInputval(initialQuantity);
    }
  }, [initialQuantity]);

  const minus = () => {
    if (inputval > 1) {
      setInputval(inputval - 1);
    }
  };

  const plus = () => {
    setInputval(inputval + 1);
  };

  useEffect(() => {
    if (typeof quantity === 'function') {
      quantity(item, inputval); 
    }
  }, [inputval]);

  return (
    <div className='quantitydrop d-flex align-items-center'>
      <Button onClick={minus}><FaRegWindowMinimize /></Button>
      <input type='text' value={inputval} readOnly />
      <Button onClick={plus}><FaPlus /></Button>
    </div>
  );
};

export default Quantitybox;
