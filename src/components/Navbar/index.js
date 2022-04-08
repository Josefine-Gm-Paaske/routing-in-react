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
            <NavLogo to="/">
                <img className="reactLogo" src={logo192} alt="Logo"></img>
            </NavLogo>
                <Link style={{marginRight:'87px'}} 
                  to="/home" 
                >
                    Home
                </Link>
                <Link style={{marginRight:'87px'}}
                  to="/about" 
                >
                    About
                </Link>
                <Link style={{marginRight:'87px'}}
                  to="/contact" 
                >
                    Contact
                </Link>
                <Link style={{marginRight:'87px'}}
                  to="/signin" 
                >
                    Sign In
                </Link>
                    <Link style={{marginRight:'87px'}} to="/sign-up">Sign Up</Link>
           </Nav>  
           <Outlet />
        </>
    );
};
export default Navbar;