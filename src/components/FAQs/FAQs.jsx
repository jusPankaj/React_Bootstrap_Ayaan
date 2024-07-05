import bgFAQs from "../../Images/bg-faq.svg";
import AccordianFAQs from "./AccordianFAQs";

const FAQs = () => {
  return (
    <div>
      <div
        className="section FAQs py-5"
        style={{ backgroundImage: `url(${bgFAQs})` }}
      >
        <div className="container">
          <div
            className="section-title text-left mb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="sub-style">
              <div className="sub-title mb-0 text-left">FAQs</div>
            </div>
            <h1 className="display-3 mb-4">
              <span className="text-sky">Frequently </span>
              Asked Questions{" "}
            </h1>

            <p className="mb-0 col-lg-8">Please find your answers.</p>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col  bg-white w-full  mb-10 ">
            {/* <div className="">
              <div>
                <div className="d-flex align-items-start accordian-wrapper p-4 py-5">
                  <div className="d-flex flex-grow-1">
                    <div className="faq-index ms-3 me-5">01</div>
                    <div>
                      <h4 className="text-sky mb-4 pt-1">
                        What are the eligibility criteria for studying MBBS
                        abroad?
                      </h4>
                      <p>
                        Nibh quisque suscipit fermentum netus nulla cras
                        porttitor euismod nulla. Orci, dictumst nec aliquet id
                        ullamcorper venenatis. Fermentum sulla craspor ttitore
                        ismod nulla.
                      </p>
                    </div>
                  </div>

                  <div className="faq-action active  ms-5 me-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6569 1.56213L10.2426 0.147914L6 4.39055L1.75736 0.147914L0.343146 1.56213L4.58579 5.80477L0.343146 10.0474L1.75736 11.4616L6 7.21898L10.2426 11.4616L11.6569 10.0474L7.41421 5.80477L11.6569 1.56213Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="d-flex align-items-start accordian-wrapper p-4">
                  <div className="d-flex flex-grow-1">
                    <div className="faq-index ms-3 me-5">02</div>
                    <div>
                      <h4 className="text-sky mb-4 pt-1">
                        What support do you provide after admission?
                      </h4>
                    </div>
                  </div>

                  <div className="faq-action ms-5 me-3">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 0.805664H6V6.80566H0V8.80566H6V14.8057H8V8.80566H14V6.80566H8V0.805664Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <AccordianFAQs FAQsData={faqsData} />
        </div>
      </div>
    </div>
  );
};

const faqsData = [
  {
    id: 1,
    Question: "What are the eligibility criteria for studying MBBS abroad?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "How do I choose the right university?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "What is the cost of studying MBBS abroad?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "What support do you provide after admission?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "How do I apply for a student visa?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
];

export default FAQs;
