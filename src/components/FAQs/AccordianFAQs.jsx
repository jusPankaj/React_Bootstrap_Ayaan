import React, { useState } from "react";

const AccordianFAQs = ({ FAQsData }) => {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(isActive === index ? null : index);
  };
  return (
    <div>
      {FAQsData.map((faq, index) => (
        <div onClick={() => handleClick(index)} key={index}>
          {console.log(faq)}
          <div className="d-flex align-items-start accordian-wrapper p-4 pt-3 pb-2">
            <div className="d-flex flex-grow-1">
              <div className="faq-index ms-3 me-5">
                {index <= 9 ? `0${index + 1}` : { index }}
              </div>
              <div>
                <h5 className="text-sky  pt-2">{faq.Question}</h5>
                {isActive === index && <p>{faq.Answer}</p>}
              </div>
            </div>

            <div
              className={`faq-action ${
                isActive === index ? "active" : ""
              }  ms-5 me-3 mb-2`}
            >
              {isActive === index ? (
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
              ) : (
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
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianFAQs;
