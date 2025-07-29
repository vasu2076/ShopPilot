import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { FaSearch } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { mycontext } from '../App';


function CountryDropDown() {
  const [isopenmodel , setisopenmodel] = useState(false)
  const [selectedtab,setselectedtab] = useState(null)
  const [countrylist,setcountrylist] = useState([])
  
  const context = useContext(mycontext)
  const selectCountry=(index ,city)=>{
    setselectedtab(index)
    setisopenmodel(false)
    context.setselectCountry(city)
  }
  useEffect(()=>{
    setcountrylist(context.countrylist)
  },[])

  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();

    if(keyword!==""){
      const list = countrylist.filter((item)=>{
        return item.toLowerCase().includes(keyword)
      });
      setcountrylist(list)
    }else{
       setcountrylist(context.countrylist)
    }

  }
  return (
   <>
     <Button className="countryDrop" onClick={()=>setisopenmodel(true)}>
                 <div className='info d-flex flex-column'>
                    <span className='lable'>Your Location</span>
                    <span className='name'>{context.selectCountry!=="" ? context.selectCountry : 'select location'}</span>
                 </div>
                 <span><FaAngleDown/></span>
                </Button>

                 <Dialog open={isopenmodel} className='locationModel'onClose={()=>setisopenmodel(false)}>
                    <h3>choose your Location</h3>
                    <Button className='close'onClick={()=>setisopenmodel(false)}> <RiCloseLargeFill /></Button>
                   
                    <div className="search-box d-flex align-items-center">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search your Location..."
                        onChange={filterList}
                    />
                    <Button className="search-btn">
                        <FaSearch />
                    </Button>
                    </div>
                    <ul className='countryList mt-3'>
                        {
                                         countrylist?.length!==0 && countrylist?.map((item,index)=>{
                                          return(
                                            <li key={index}><Button onClick={()=>selectCountry(index,item)}
                                              className={`${selectedtab===index? 'active' :'' }`}
                                            >{item}</Button></li>
                                          )
                                         })
                                       }
                    </ul>

    </Dialog>
   </>
  )
}

export default CountryDropDown