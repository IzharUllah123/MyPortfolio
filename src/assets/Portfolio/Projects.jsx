import React from "react";
import './Portfolio.css'
import { Link } from "react-router-dom";
function Projects(){
    return(
    <div className="project">
         <div className="heading">Projects</div>
         <p>
         In the Weather Project I used API provide by Openweather.
         I just fetch the data including temprature pressure etc.
         The second project is a mobile store admin system <br></br> developed using React and Laravel.
          Admins have the ability to add and delete products, 
         while customers can view a product list along with their respective prices. 
         
         </p>
         <br></br>



    <div className="project-container">

      
      <div className="card">
      
        
         <img className="weathr" src="weather.png">

         </img>
     
      </div>

      <div className="button-scnd">
        <Link to={`https://izharullah123.github.io/Weather/`} target="_blank">
        <button className="btnn">
            Live Demo
        </button>
        </Link>


      </div>
     

      <div className="card">
     
     <img className="weathr" src="eccomrece.png">

     </img>
     </div>

     <div className="button-scnd">
     <Link to={`https://github.com/IzharUllah123/Fullstack/tree/master`} target='_blank' >
  <button className="btnn" >
    Github
  </button>
  </Link>
</div>
     
    










    </div>
    </div>)
}
export default Projects;