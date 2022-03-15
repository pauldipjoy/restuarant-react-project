import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';




const Body = () => {

return(

<div>

    <Route  path= "/"         exact   component = {Home} />
    <Route  path= "/menu"     exact   component = {Menu} />
    <Route  path= "/about"    exact   component = {About} />
    <Route  path= "/contact"  exact   component = {Contact}/>



    
</div>



);

}


export default Body;