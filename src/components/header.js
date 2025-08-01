import React, { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import CountryDropDown from './countrydropdown';
import PersonIcon from '@mui/icons-material/Person';
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from './searchbox';
import Navigation from './navigation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { mycontext } from '../App';
import { MdArrowDropDown } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import user from "../assets/images/user3.png";
import EmailIcon from '@mui/icons-material/Email';
import LockOutlineIcon from "@mui/icons-material/LockOutline";

function Header() {

  const context = useContext(mycontext)
  const [anchorEl, setAnchorEl] = React.useState(null);
   const openMyacc = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <div className="headerWrapper">
        <header className="header">
          <div className="container contai">
            <div className="row align-items-center">
              <div className="logoWrapper col-sm-2 d-flex align-items-center">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                  <h3>ShopPilot</h3>
              </div>

              <div className="part2 col-sm-10 d-flex align-items-center justify-content-start">
                {
                  context.countrylist.length!==0 && <CountryDropDown/>
                }
              
              <SearchBox/>


              <div className='part3 d-flex align-items-center ml-auto'>
                          {
            context.islogin !== true ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-big btn-round signin">Sign in</Button>
              </Link>
            ) : (
              <>
                 <div className="myacc-wrapper">
                <Button
                  className="myacc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}>
                  <div className="user-img">
                    <span className="rounded-circle">
                      <img src={user} alt="user" />
                    </span>
                  </div>
                  <div className="use-info res-hide">
                    <h4>
                     {storedUser.name}{" "}
                      <MdArrowDropDown style={{ fontSize: "20px" }} />
                    </h4>
                    <p className="mb-0">{storedUser.Email || ""}</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyacc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                     {storedUser.name}
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    {storedUser.Email}
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    {storedUser.phoneno}
                  </MenuItem>
               <MenuItem className="logout"
                onClick={() => {
                context.setislogin(false);
                localStorage.removeItem("user");
                handleCloseMyAccDrop();
      }}
>
              <ListItemIcon>
                <LockOutlineIcon fontSize="small"  className='logout'/>
              </ListItemIcon>
              <b>Logout</b>
            </MenuItem>
                </Menu>
              </div>
                <div className='ml-auto carttab'>
                    <Link to={"/cart"}>
                    <Button className='circle'><MdOutlineShoppingCart /></Button>
                    </Link>
                </div>
              </>
            )}
              </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation/>
      </div>
    </>
  );
}


export default Header