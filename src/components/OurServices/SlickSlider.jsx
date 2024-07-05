// src/components/Slider.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from "../../Images/service-1.svg";
import service2 from "../../Images/service-2.svg";
import service3 from "../../Images/service-3.svg";
import service4 from "../../Images/service-4.svg";
import service5 from "../../Images/service-5.svg";
import service6 from "../../Images/service-6.svg";
import service7 from "../../Images/service-7.svg";
import service8 from "../../Images/service-8.svg";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    speed: 500,
    innerHeight: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false, // To enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div className="col-md-6" key={index}>
            <div className="service-wrapper">
              <div className="service-content">
                <img className="coaching-concept" src={slide.imgSrc} />

                <h3 className="">{slide.title}</h3>
                <hr />
                <div className="group-2">
                  <h5 className="text-sky">{slide.subtitle1}</h5>
                  <p className="text-wrapper-18">{slide.content1}</p>
                </div>
                <div className="group-2">
                  <h5 className="text-sky">{slide.subtitle2}</h5>
                  <p className="text-wrapper-18">{slide.content2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const slidesData = [
  {
    imgSrc: service1,
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: service2,
    title: "University Selection",
    subtitle1: "Top University Partnerships",
    content1:
      "With our extensive network of reputable medical universities across various countries, we help you select institutions that match your academic profile and career ambitions.",
    subtitle2: "Detailed Information",
    content2:
      "We provide comprehensive information about universities, including their curriculum, facilities, and global rankings, to help you make informed decisions.",
  },
  {
    imgSrc: service3,
    title: "Application Assistance",
    subtitle1: "Step-by-Step Guidance",
    content1:
      "We guide you through the entire application process, ensuring that all forms and documents are correctly filled out and submitted on time.",
    subtitle2: "Document Preparation",
    content2:
      "Assistance with compiling necessary documents, including transcripts, recommendation letters, and personal statements, to enhance your application’s success.",
  },
  {
    imgSrc: service4,
    title: "Visa Assistance",
    subtitle1: "Visa Application Process",
    content1:
      "Our team of experts helps you navigate the visa application process, ensuring you meet all requirements and submit the correct documents.",
    subtitle2: "Interview Preparation",
    content2:
      "We provide coaching and mock interviews to prepare you for the visa interview, increasing your chances of a successful application.",
  },
  {
    imgSrc: service5,
    title: "Pre-Departure Orientation",
    subtitle1: "Cultural Adaptation",
    content1:
      "Our pre-departure sessions prepare you for the cultural, social, and academic aspects of living and studying in a foreign country.",
    subtitle2: "Essential Information",
    content2:
      "We provide essential information on travel arrangements, accommodation, banking, and safety to ensure a smooth transition.",
  },
  {
    imgSrc: service6,
    title: "On-Ground Support",
    subtitle1: "Continuous Assistance",
    content1:
      "Our support extends beyond your departure, with on-ground assistance available to help you settle into your new environment.",
    subtitle2: "Emergency Support",
    content2:
      "We provide a reliable point of contact for any emergencies or issues you may face during your study period.",
  },
  {
    imgSrc: service7,
    title: "Financial Guidance",
    subtitle1: "Scholarships and Loans",
    content1:
      "Assistance with identifying and applying for scholarships, grants, and educational loans to ease the financial burden of studying abroad.",
    subtitle2: "Budget Planning",
    content2:
      "We help you plan your budget, considering tuition fees, living expenses, and other costs, to ensure financial stability throughout your education.",
  },
  {
    imgSrc: service8,
    title: "Career and Internship Support",
    subtitle1: "Internship Placements",
    content1:
      "We assist in finding relevant internships that provide valuable practical experience and enhance your medical training.",
    subtitle2: "Career Counseling",
    content2:
      "Our career counseling services help you explore job opportunities and further studies after completing your MBBS degree.",
  },
];

export default SlickSlider;
