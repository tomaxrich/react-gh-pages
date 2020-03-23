import React from 'react';
import './Navbar.css';

function Navbar() {   
    return (
        <div className='box'>
        <nav >
            <div className="container">
                <a className="logo">TMR Technology</a>
                <div className="footerleft">
                <a href="#" id="left"> Home</a>
                <a href="#" id="left"> Search</a>
                <a href="#" id="left"> Contact</a>
                <a href="#" id="left"> Login</a>
                </div>
            </div>
        </nav>
        </div>
    );
}


export default Navbar