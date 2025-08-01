import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { mycontext } from '../App';
import googleicon from "../assets/images/googleicon.png";
import { loginData } from '../utils/api';
import Rimg from '../assets/images/login.png'

const Login = () => {
    const context = useContext(mycontext)
    const [inputIndex, setInputIndex] = useState(null);
      const [Email, setEmail] = useState("");
      const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true)
    },[])

      const focusInput = (index) => {
        setInputIndex(index);
    }
      const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginData("/signup/login", { Email, password ,name});
      alert("Login Success",response)
      localStorage.setItem("user", JSON.stringify(response.user));
        context.setislogin(true);  
       navigate("/"); 
    } catch (err) {
      alert("Login Failed")
    }
  };


  return (
    <>
           <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <h1>Welcome back</h1>
          <p className="subtext">Please enter your details</p>
            <form onSubmit={handleLogin}>
          <div className="form-group mt-2">
            <label>Email address</label>
            <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                    autoFocus
                                     onChange={(e) => setEmail(e.target.value)}
                                    name="email" //  onChange={onchangeInput}
                                />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
                                    type='password'
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                     onChange={(e) => setPassword(e.target.value)}
                                    name="password"  // onChange={onchangeInput}
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
            Don’t have an account? <a href="/Signup">Sign up</a>
          </p>
        </div>

        <div className="login-image">
          <img
            src={Rimg}
            alt="Login Visual"
          />
        </div>
      </div>
    </div>
           
    </>

  )
}

export default Login
