import React from 'react'
import './Home.css'
import Main from '../template/Main'
import LogoHeader from '../template/LogoHeader';



export default props =>

<React.Fragment>
    <Main icon='home' title="Home"
        subtitle="Neonumy">
        <div className='display'>Hi! Please, let us know your opinion about our company products satisfaction!! </div>
        
     <LogoHeader/>
     
     
        <hr />
        <p className="mb-0">
            <li> Here you can know our Digital Solutions!</li>
        </p>
    </Main>
    </React.Fragment>