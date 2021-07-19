import React from 'react';
import { NavLink } from "react-router-dom";
import ChatIcon from '@material-ui/icons/Chat';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../images/Capture.webp';


const Navbar = () => {
    return (
        <>
            <div className = "container">
                <nav className="navbar navbar-expand-lg navbar-light bg-Body-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/" ><img src = {logo} className="img-fluid" style={{maxWidth: '80%'}} /></NavLink>                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/signup">HOME</NavLink>                                    
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link" to="/">PRODUCTS</NavLink>                                    
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                                        
                                        <li><NavLink className="dropdown-item" to="/banner_pen">BANNER PENS</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item" to="/">CUSTOMIZED USB DRIVE</NavLink></li>                                        
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">ARTWORK & SPECS</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link" to="/">GALLERY</NavLink>                                    
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                                    
                                        <li><NavLink className="dropdown-item" to="/">BANNER DESIGN GALLERY</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>                                        
                                        <li><NavLink className="dropdown-item" to="/">BANNER PEN GALLERY</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>                                        
                                        <li><NavLink className="dropdown-item" to="/">USB U-KEY GALLERY</NavLink></li>                                        
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">CONTACT US</NavLink>
                                </li>
                                <li className="nav-item p-2 ms-5">
                                    <button type="button" className="btn btn-primary btn-sm"><ChatIcon fontSize="small" /></button>
                                </li>
                                <li className="nav-item p-2">
                                    <button type="button" className="btn btn-primary btn-sm"><AddShoppingCartIcon fontSize="small" /></button>
                                </li>
                                <li className="nav-item dropdown p-2">
                                    <button type="button" className="btn btn-primary btn-sm"><PersonIcon fontSize="small" /></button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/signin">LOGIN</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item" to="/signup">REGISTER</NavLink></li>                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>    
                
        </>
    );
}

export default Navbar;


