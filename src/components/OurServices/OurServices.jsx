import React from 'react'
import SlickSlider from './SlickSlider'
import bgServices from "../../Images/bg-services.svg";


const OurServices = () => {
  return (
    <div>
        <div className="section services py-5"
      style={{ backgroundImage: `url(${bgServices})` }}>
        <div className="container">
          <div
            className="section-title text-left mb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="sub-style">
              <div className="sub-title mb-0">What we offer</div>
            </div>
            <h1 className="display-3 mb-4">
              <span className="text-sky">Our </span>
              Services
            </h1>

            <p className="mb-0 col-lg-8">
              we offer a comprehensive range of services designed to support
              Indian students throughout their journey of pursuing an MBBS
              degree abroad. Our goal is to make the entire process seamless,
              from the initial counseling session to your successful integration
              into your chosen university.
            </p>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row ">
          <SlickSlider />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices