import React from 'react'
import bgHero from '../../Images/bg-hero.svg';
import heroRight from '../../Images/health-professional-team.png';
// import { Modal, Button } from 'react-bootstrap';


const HeroSection = () => {
  return (
    <div>
        <div className="section hero-section" style={{ backgroundImage: `url(${bgHero})` }}>
         <div className="container position-relative">
           <div className="row">
             <div className="col-md-6">
                 <div className="hero-caption">
                     <h1 className="your-gateway-to-a">
                       <span className="span">Your Gateway to a </span>
                       <span className="text-wrapper-5 text-gold">Successful Medical Career</span>
                       <span className="span"> Abroad</span>
                     </h1>
                     <p className="p text-white my-3">Your Gateway to a Successful Medical Career Abroad</p>
                   </div>
                   <div className="primary-button-wrapper">
                     <button href="#" data-bs-toggle="modal" data-bs-target="#contactModal" className="btn btn-secondary  text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Get Started Today</button>

                   </div>
             </div>
             <div className="img-hero-right">
                 <img className="health-professional img-fluid" src={heroRight} alt='hero_image'/>
             </div>
           </div>
               
           
         </div>
    </div>
    </div>
  )
}

export default HeroSection