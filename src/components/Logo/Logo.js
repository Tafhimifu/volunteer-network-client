import React from 'react';
import logoPic from '../../logos/Group 1329.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className="logo-div">
          <img style={{maxWidth:"400px"}} src={logoPic} alt=""/>  
        </div>
    );
};

export default Logo;