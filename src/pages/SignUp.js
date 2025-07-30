import React, { useContext, useEffect, useState } from 'react';
import { mycontext } from '../App';
import Rimg from '../assets/images/login.png'
import googleicon from "../assets/images/googleicon.png";
import { useNavigate } from 'react-router-dom';
import { userData } from '../utils/api';

const Signup = () => {
  const navigate = useNavigate()
    const [inputIndex, setInputIndex] = useState(null);
  const [fromFields, setFromFields] = useState({
         name:'',
                 Email:'',
                 phoneno:'',
                 password:'',
                 cpassword:'',
     });
  const context = useContext(mycontext)
      useEffect(()=>{
          context.setIsHideSidebarAndHeader(true)
      },[])

       const focusInput = (index) => {
        setInputIndex(index);
    }
     const inputchange=(e)=>{
       setFromFields(()=>({
                    ...fromFields,
                    [e.target.name]:e.target.value
                }))
    }

  const adduser=(e)=>{
          e.preventDefault()
          userData('/signup/create',fromFields)

        if(fromFields.password !== fromFields.cpassword){
            alert("incorrect password")
          }else{
              alert("signup complted")
              navigate('/login')
          }
        }

  return (
   <>
  
             <div className="login-container">
        <div className="signup-card">
           <div className="login-image">
            <img
              src={Rimg}
              alt="Login Visual"
            />
          </div>
          
          <div className="login-form">
            <h2>Create an account</h2>
              <form className='mt-2' onSubmit={adduser}>
            <div className="form-group">
              <label>Name</label>
              <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Your Name"
                                       onFocus={() => focusInput(0)}
                                            onBlur={() => setInputIndex(null)}
                                            autoFocus
                                            onChange={inputchange}
                                      name="name" 
                                  />
            </div>
            <div className="form-group">
              <label>Phone No:</label>
              <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Your Phone No"
                                        onFocus={() => focusInput(1)}
                                            onBlur={() => setInputIndex(null)}
                                            onChange={inputchange}
                                      name="phoneno"
                                  />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Your Email"
                                        onFocus={() => focusInput(2)}
                                            onBlur={() => setInputIndex(null)}
                                            onChange={inputchange}
                                      name="Email" //  onChange={onchangeInput}
                                  />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                                      type='password'
                                      className="form-control"
                                      placeholder="Enter Your Password"
                                      onFocus={() => focusInput(3)}
                                            onBlur={() => setInputIndex(null)}
                                     onChange={inputchange} required
                                      name="password" 
                                  />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                                      type='password'
                                      className="form-control"
                                      placeholder="Enter Your Password"
                                     onFocus={() => focusInput(4)}
                                            onBlur={() => setInputIndex(null)}
                                   onChange={inputchange} required
                                      name="cpassword"  
                                  />
            </div>
            <button className="btn-primary" type='submit'>Sign in</button>
            </form>
  
            <button className="btn-google">
              <img
                src={googleicon}
                alt="Google"
              />
              Sign in with Google
            </button>
  
            <p className="signup-text">
              Already have an account? <a href="/Signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
   </>
  );
};

export default Signup;
