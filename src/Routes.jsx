import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../src/components/home/Home'
import Blog from '../src/components/blog/Blog'




export default props=>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/blog' component={Blog} />
    
    
    <Redirect from="*" to='/' />

</Switch>