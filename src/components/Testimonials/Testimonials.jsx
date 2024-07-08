import testimonial from '../../Images/testimonial.png';

const Testimonials = () => {
  return (
    <div>
        <div className="section testimonial py-5">
        <div className="container">
          <div className="section-title text-left mb-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="sub-style">
                  <div className="sub-title mb-0 text-left">Testimonials</div>
              </div>
              <h1 className="display-3 mb-4">
                  <span className="text-sky">Success </span>
                  Stories</h1>
                  
              <p className="mb-0 col-lg-8">
              Hear from our successful students who are now thriving in their medical careers.              </p>
            </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="testimonial-wrapper">
                <div className="testimonial-card">
                      <p className="text-wrapper-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className="autor-details d-flex align-items-center">
                        <img className="author-pic me-3" src={testimonial} alt='author_image'/>
                        <div className="author-desc">
                          <h5 className="text-sky mb-0">John Doe</h5>
                          <p className="mb-0">Student</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="testimonial-wrapper">
                <div className="testimonial-card">
                      <p className="text-wrapper-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className="autor-details d-flex align-items-center">
                        <img className="author-pic me-3" src={testimonial} alt='author_image'/>
                        <div className="author-desc">
                          <h5 className="text-sky mb-0">John Doe</h5>
                          <p className="mb-0">Student</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="testimonial-wrapper">
                <div className="testimonial-card">
                      <p className="text-wrapper-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className="autor-details d-flex align-items-center">
                        <img className="author-pic me-3" src={testimonial} alt='author_image'/>
                        <div className="author-desc">
                          <h5 className="text-sky mb-0">John Doe</h5>
                          <p className="mb-0">Student</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="testimonial-wrapper">
                <div className="testimonial-card">
                      <p className="text-wrapper-18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className="autor-details d-flex align-items-center">
                        <img className="author-pic me-3" src={testimonial} alt='author_image'/>
                        <div className="author-desc">
                          <h5 className="text-sky mb-0">John Doe</h5>
                          <p className="mb-0">Student</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
       
    </div>
    </div>
  )
}

export default Testimonials;