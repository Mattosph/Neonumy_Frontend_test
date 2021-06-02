import React, {Component } from 'react'
import Main from '../template/Main'
import LogoWeather from '../assets/imgs/Weather.JPG'
import '../assets/imgs/Weather.css'
import Card from '../template/Card'


export default props =>

<React.Fragment>

    <Main icon='user' title="Blog"
        subtitle="Neonumy">
         <div>   
         <img className ='LogoWeather' src={LogoWeather} alt="logo" />
         <button className="WeatherButton"> 5 days forecast.</button>   
         </div>
        <div className='display'>Hi! Please, let us know your opinion about our company products satisfaction!! </div>
        
    
     <Card/>
     
        <hr />
        <p className="mb-0">
            <li> Here you can know our Digital Solutions!</li>
        </p>
    </Main>
    
    </React.Fragment>