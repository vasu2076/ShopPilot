import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/footer';
import Listing from './pages/list';
import ProductModal from './components/productmodal';
import ProductDetails from './pages/productdetail';
import { fetchDataFromApi } from './utils/api';
import Login from './pages/login';
import SignUp from './pages/SignUp';

const mycontext = createContext();

function App() {
  const [countrylist , setcountrylist] = useState([]);
    const [islogin,setislogin] = useState(false)
  const [selectCountry , setselectCountry] = useState('');
  const[isopenproductModal,setisopenproductModal] = useState(false)
  const [productdata , setproductdata] = useState();
    const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  
   useEffect(() => {
    getIndianCities();
  }, []);

  const getIndianCities = async () => {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/cities",
        { country: "India" },
        { headers: { "Content-Type": "application/json" } }
      ).then((res)=>{

        setcountrylist(res.data.data);
      })
    } 
      useEffect(()=>{ 
      fetchDataFromApi(`/products/${isopenproductModal._id}`).then((res)=>{
        setproductdata(res)
      })

    },[isopenproductModal])

  const values = {
    countrylist,
    setcountrylist,
    selectCountry,
    setselectCountry,
    isopenproductModal,
    setisopenproductModal,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    islogin,
    setislogin,
  };
   const closeProductModal=()=>{
    setisopenproductModal(false)
  }

  return (
    <BrowserRouter>
      <mycontext.Provider value={values}>
         {
    isHideSidebarAndHeader!==true &&
    <Header/>
  }
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<SignUp/>} />
          <Route path="/" element={<Home />} />
          <Route path='/cat/:name' element={<Listing/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
          {
    isHideSidebarAndHeader!==true &&
     <Footer/>
  }
      
          { isopenproductModal.open === true && <ProductModal closeProductModal={closeProductModal} data={productdata}/> }
          {/* { isopenproductModal === true && <ProductModal data={productdata} closeProductModal={closeProductModal} /> } */}

      </mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { mycontext };
