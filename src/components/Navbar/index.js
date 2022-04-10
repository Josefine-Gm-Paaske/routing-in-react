import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
    Nav,
    NavLogo,
} from "./NavbarElements";
import logo192 from '../../logo192.png'

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/home">
                <img className="reactLogo" src={logo192} alt="Logo"></img>
            </NavLogo>
                <Link  
                  to="/home" 
                >
                    Home
                </Link>
                <Link 
                  to="/about" 
                >
                    About
                </Link>
                <Link 
                  to="/contact" 
                >
                    Contact
                </Link>
                <Link 
                  to="/signin" 
                >
                    Sign In
                </Link>
                    <Link  to="/signup">Sign Up</Link>
           </Nav>  
           <Outlet />
        </>
    );
};
export default Navbar;