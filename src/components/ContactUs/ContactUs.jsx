import mapContact from "../../Images/map-contact.png";
import call from "../../Images/call.png";
import address from "../../Images/address.png";
import envelope from "../../Images/envelope.png";
import whatsapp from "../../Images/whatsapp.png";

const ContactUs = () => {
  return (
    <div>
      <div className="section contact py-5">
        <div className="container">
          <div
            className="section-title text-left mb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="sub-style">
              <div className="sub-title mb-0 text-left">Contact us</div>
            </div>
            <h1 className="display-3 mb-4">
              <span className="text-sky">Get in </span>
              touch
            </h1>

            <p className="mb-0 col-lg-8">
              This is dummy text. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="contact-form">
                <form className="mb-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="John Doe"
                          onChange={(e) => e.target.value}
                        />
                        <label for="floatingInput">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="floatingInput"
                          placeholder="999 88 77 66"
                        />
                        <label for="floatingInput" className="text-black">
                          Contact Number
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                    </div>
                    <dic className="col-md-12">
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option selected>Open this select country</option>
                          <option value="1">India</option>
                          <option value="2">USA</option>
                          <option value="3">Japan</option>
                        </select>
                        <label for="floatingSelect">
                          Country Interested In
                        </label>
                      </div>
                    </dic>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "10rem" }}
                        ></textarea>
                        <label for="floatingTextarea2">Messages</label>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-primary  text-white py-2 px-4 flex-wrap flex-sm-shrink-0 mt-5">
                    Submit
                  </button>
                </form>
              </div>
              <div className="or-wrapper">
                <hr></hr>
                <div className="or">OR</div>
              </div>
              <div className="contact-via d-flex align-items-center mb-5">
                <div className="contact-us-via">CONTACT US VIA</div>
                <img className="img-fluid ms-2" src={whatsapp} />
              </div>

              <div className="contact-info d-flex justify-content-between">
                <div className="d-flex align-items-start">
                  <div className="icon-info me-2">
                    <img className="img-4" src={call} />
                  </div>
                  <div className="info-desc ">
                    <div className="text-sky">Phone</div>
                    <div className="text-wrapper-34">03 5432 1234</div>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="icon-info me-2">
                    <img className="img-4" src={address} />
                  </div>
                  <div className="info-desc ">
                    <div className="text-sky">Address</div>
                    <div className="text-wrapper-34">@lorem ipsum</div>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="icon-info me-2">
                    <img className="img-4" src={envelope} />
                  </div>
                  <div className="info-desc ">
                    <div className="text-sky">Email</div>
                    <div className="text-wrapper-34">
                      info@ayaanoverseas.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <img className="map-conatct img-fluid" src={mapContact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
