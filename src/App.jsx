

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './assets/Portfolio/Header';
import Home from './assets/Portfolio/Home';
import About from './assets/Portfolio/About';
import Education from './assets/Portfolio/Education';
import Skill from './assets/Portfolio/Skill';
import Contact from './assets/Portfolio/Contact';
import Projects from './assets/Portfolio/Projects';

function App() {
  return (
 
 
  
<BrowserRouter>
 
   
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
    
   
        <Route path="/about" element={<About />}/>
        
     
        <Route path="/education" element={  <Education />} />
       
        
        <Route path="/skill" element={<Skill /> }/>
         
         <Route path='projects' element={<Projects />}/>
       
        <Route path="/contact" element={<Contact />}/>
       
      
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
