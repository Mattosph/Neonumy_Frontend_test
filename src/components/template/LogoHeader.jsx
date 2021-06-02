import './LogoHeader.css';
import LogoHeader from '../assets/imgs/logoHeader.JPG'
import React from 'react'

export default props=> 
<h1 className="LogoHeader">
    <a href="/" className="LogoHeader">
        <img src= {LogoHeader} alt=" Header logo"/>
    </a>
</h1>