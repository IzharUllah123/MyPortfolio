

import React from 'react';
import './Portfolio.css'
import { Link } from 'react-router-dom';
import About from './About';
import Education from'./Education'
import Skill from './Skill'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Projects from './Projects';





function Home()


{
    const whatsappNumber = "+923039403936";  

    const facebookProf="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL"
   
    const LinkedinProfile="https://www.linkedin.com/in/ixhar-khan-902588225";
   
    // Function to create a WhatsApp chat link
  const createWhatsAppLink = () => {
    return `https://wa.me/${whatsappNumber}`;
  };
   
   return(<>
      <div className='Home'>
{/*      
            <img src='pic.jpg'></img>
        */}
        <div className='sub-content'>
       
            <h3>Hi, I am <span>Izhar</span></h3>
            <div className='anim'>
                <h4>
                    Front End Developer
                </h4>
            </div>
            <p>To see the right opportunity for a lifelong career in an organization 
                to become a part of a dynamic group where I could further explore the
                 skills and capabilities which I gained in the whole environment and
                  equally vast opportunities of career, and to serve in a challenging 
                work environment and equally vast opportunities of career development based 
                upon achievements and results. </p>
        </div>
        
        <div className='button'>
                 <Link to={LinkedinProfile} target='_blank'>
            <button className='btn'>Hire Me</button>
            </Link>
            <Link to="/about">
            <button className='btn'>About ME</button>

            </Link>
        </div>


     


        <div className='icon'>
        <Link to={facebookProf} target='_blank'>
          <div className='iccon '>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          </Link>
          
          <a href={createWhatsAppLink()} target='_blank' rel='noopener noreferrer'>
                        <div className='iccon'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </a>

          <Link to={LinkedinProfile} target='_blank'>
          <div className='iccon'>
          <FontAwesomeIcon icon={faLinkedin} />
          </div>
          </Link>
        </div>
      

        
        </div>
       
 


    <About />
    <Education />
   <Skill />
   <Projects />
   <Contact />
    </>)
}
export default Home;