import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav style={{background:'black'}}>
            <NavLogo to="/">
                React
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'white' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  activeStyle={{ color: 'white' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'white' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/signin" 
                  activeStyle={{ color: 'white' }}
                >
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;