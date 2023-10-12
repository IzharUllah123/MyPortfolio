import React from 'react';
import './Portfolio.css'
import { Link } from 'react-router-dom';
function Header(){
    return(<>

    <header className="header">
   <div className='name'>Izhar</div>

      <ul>
       <li className='active'><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
      </ul>





  </header>
    
   

    </>)
}
export default Header;