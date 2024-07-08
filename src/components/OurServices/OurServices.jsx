import React from 'react'
import SlickSlider from './SlickSlider'
import bgServices from "../../Images/bg-services.svg";
import bgCTAsecond from'../../Images/CTA-2.svg';


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

      {/* {CTA2} */}


      <div
        className="section CTA-2 py-5"
        style={{ backgroundImage: `url(${bgCTAsecond})` }}
      >
        {/* <img className="bg-2" src="img/bg-2.png" /> */}
        <div className="container py-5">
          <h2 className=" text-white col-6 col-lg-6 col-md-12">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures.
          </h2>
          <p className="text-normal text-white">
            We'll get back to you within 24 hours
          </p>

          <div className="primary-button-wrapper">
            <a
              href="#"
              className="btn btn-secondary btn-light text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices;