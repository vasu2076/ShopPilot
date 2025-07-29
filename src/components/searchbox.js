import React from 'react'
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button'

const SearchBox = () => {
  return (
    <>
      <div className='headerserch ml-3 mr-3'>
                    <input type='text' placeholder='search for products ...'/>
                    <Button><FaSearch/></Button>
                  </div>
    </>
  )
}

export default SearchBox