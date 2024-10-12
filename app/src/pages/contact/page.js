'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import getInTouchImg from '@/app/assests/contactImg/get-in-touch.png'; 
// Adjust the path as per your file structure
import '@/app/globals.css'
import Head from 'next/head';
import globleImg from '@/app/assests/contactImg/globle-img.png'
import headOfficeImg from '@/app/assests/contactImg/head-office.png'
import GlobalReachLEFTImg from '@/app/assests/contactImg/GlobalReachLEFTImg.png'
import GlobalReachrightImg from '@/app/assests/contactImg/GlobalReachright.png'
import SeamlessrigtImg from '@/app/assests/contactImg/Seamlessrigt.png'
import SeamlessLeftImg from '@/app/assests/contactImg/SeamlessLeft.png'
import StayConnectedleftImg from '@/app/assests/contactImg/StayConnectedleft.png'
import StayConnectedrightImg from '@/app/assests/contactImg/StayConnectedright.png'
import ukOffice from '@/app/assests/contactImg/uk-office.png'
import twitterImg from '@/app/assests/contactImg/twitter.png'
import linkdinImg from '@/app/assests/contactImg/linkdin.png'
import letsTalkImg from '@/app/assests/contactImg/lets-talk.png'
import facebookImg from '@/app/assests/contactImg/facebook.png'
import getintouchleft from '@/app/assests/contactImg/Get in Touch LEFT.png'
import email from '@/app/assests/email.png'

const Contact = () => {
  const [step, setStep] = useState(0); // Initialize the step state
  const [formValues, setFormValues] = useState({
    floating_first_name: "",
    floating_email: "",
    floating_phone: "",
    floating_subject: "",
    floating_message: "",
  });

  const steps = [
    { label: "What's your name ?", name: "floating_first_name" },
    { label: "What's your email ?", name: "floating_email" },
    { label: "What's your phone number ?", name: "floating_phone" },
    { label: "Subject", name: "floating_subject" },
    { label: "Message", name: "floating_message" },
  ];

  const handleChangeStep = (direction) => {
    if (direction === "next") {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <main>
        <section className="section-h section-h-getintouch fix-height" >
      <div className="container">
        <div className="get-in-touch">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="get-in-headings">
                <h1 className="main-heading mb-5">
                  Get in <br />
                  Touch with <br />
                  HRS Camp!
                </h1>
                <Image className="img-heading w-50" src={getintouchleft} alt="Get in touch"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hrs-camp-h">
                <Image className="img-heading" src={getInTouchImg} alt="Get in touch" />
                <div className="get-in-paragraph">
                  <p>
                    We&apos;re here to assist you in every step of your HR and recruitment journey. We have a global
                    presence with offices strategically located in key regions, ensuring accessibility to our services.
                    You can find our office addresses and contact details listed here for your convenience. For
                    inquiries, feedback, or partnership opportunities, our user-friendly contact form is at your
                    service. Just drop us a message, and our dedicated team will promptly respond to your needs. Stay
                    updated with HRS Camp&apos;s latest updates and industry insights by following our social media profiles.
                    Connect with us on platforms like Facebook, Instagram, LinkedIn, and more to engage in meaningful
                    conversations and stay connected with the pulse of talent acquisition trends. Your feedback and
                    inquiries are essential to us, and we look forward to hearing from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Head>
        <title>Global Reach - Local Connection</title>
        <meta name="description" content="HRS Camp's global reach with local offices." />
      </Head>
      <section className="section-h section-h-getintouch" style={{margin:"80px 0px"}}>
        <div className="container">
          <div className="get-in-touch">
            <div className="row g-3 align-items-center">
              <div className="col-lg-6">
                <div className="get-in-headings">
                  <h1 className="main-heading mb-5">
                    Our Global <br />
                    Reach, Your <br />
                    Local Connection
                  </h1>
               
                </div>
                <Image className="img-heading w-50" src={GlobalReachLEFTImg} alt="Get in touch"/>
              </div>
              <div className="col-lg-6 section-adjust">
                <div className='section-one'>
                <Image className="img-heading mb-5" src={GlobalReachrightImg} alt="Get in touch"/>
                <div className="get-in-paragraph">
                  <p>
                    Explore HRS Camp&apos;s network of strategically placed offices, offering global reach
                    with a local touch. Our offices ensure accessibility to top-tier talent and
                    personalized recruitment solutions tailored to your region. Contact us to harness
                    the power of our global expertise.
                  </p>
                </div>
                </div>
                <div className='section-two'>
                <h1 className="location-heading my-3">Our Offices</h1>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="location-cards shadow-sm">
                      <div>
                        <Image
                          className="w-100"
                          src={headOfficeImg}
                          alt="Head Office"
                          width={400}
                          height={300}
                        />
                        <div className="location-text">
                          <h4 className="sub-heading">Head Office</h4>
                          <div>
                            <ul className="d-flex align-items-center">
                              <li>
                                <a href="#">
                                  <i className="fas fa-globe"></i>
                                </a>
                              </li>
                              <li className="ms-2">
                                Faiz Ahmed Faiz Rd, Quaid-e-Azam Industrial Estate, Lahore, Punjab
                                54000, Pakistan
                              </li>
                            </ul>
                            <ul className="d-flex align-items-center">
                              <li>
                                <a href="tel:+924231112223">
                                  <i className="fas fa-phone"></i>
                                </a>
                              </li>
                              <li className="ms-2"> +92 423 111 22 23</li>
                            </ul>
                            <ul className="d-flex align-items-center">
                              <li>
                                <a href="mailto:contact@hracamp.com">
                                  <i className="fas fa-envelope"></i>
                                </a>
                              </li>
                              <li className="ms-2"> contact@hracamp.com</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="location-cards d-flex flex-column shadow-sm">
                      <div>
                        <Image
                          className="w-100"
                          src={ukOffice}
                          alt="UK Office"
                          width={400}
                          height={300}
                        />
                        <div className="location-text">
                          <h4 className="sub-heading">UK Office</h4>
                          <div>
                            <ul className="d-flex align-items-center">
                              <li>
                                <a href="#">
                                  <i className="fas fa-globe"></i>
                                </a>
                              </li>
                              <li className="ms-2"> 1 Hyde Park, London, United Kingdom</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Head>
        <title>Seamless Communication, Swift Solutions</title>
        <meta
          name="description"
          content="Contact us for inquiries, feedback, or partnership requests. Our team will provide prompt, tailored solutions."
        />
      </Head>
      <section className="section-h section-h-getintouch">
        <div className="container">
          <div className="get-in-touch">
            <div className="row g-3 align-items-center">
              <div className="col-lg-6">
                <div className="get-in-headings mb-5">
                  <h1 className="main-heading">
                    Seamless <br />
                    Communication,<br />
                    Swift Solutions
                  </h1>
                </div>
                <Image className="img-heading w-50" src={SeamlessLeftImg} alt="Get in touch"/>
              </div>
              <div className="col-lg-6">
              <div className="section-adjust-form">
              <Image className="seamles-right-img mb-5" src={SeamlessrigtImg} alt="Get in touch"/>
                <div className="get-in-paragraph">
                  <p>
                    Our user-friendly contact form ensures hassle-free communication. Send us your
                    inquiries, feedback, or partnership requests, and our dedicated team will provide
                    prompt, tailored solutions to meet your needs. Reach out today for a seamless
                    exchange of information.
                  </p>
                </div>
                <div className="mx-3 h-[50rem] ">
        <form className="pt-[25rem]">
          <div className="relative flex z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={steps[step].name}
                id={steps[step].name}
                value={formValues[steps[step].name]}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor={steps[step].name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {steps[step].label}
              </label>

              <progress
                value={(step + 1) * (100 / steps.length)} // Calculate the value dynamically
                max="100"
                className="block w-full bg-blue-500 h-[0.1rem]"
              />
            </div>
            <button
              type="button"
              className="text-black font-bold bg  hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
              onClick={() => handleChangeStep("next")}
              disabled={step === steps.length - 1}
            >
              Next
            </button>
          </div>
        </form>
      </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>


     


      <section className="section-h section-h-getintouch">
    <div className="container">
      <div className="contact-us">
        <div className="row g-3">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="contact-content d-flex flex-column">
            {/* <Image src={email} /> */}
              <h2>Contact US</h2>
              <p className="get-in-paragraph">hello@hrscamp.com</p>
            </div>




          </div>
        </div>
      </div>
    </div>
  </section>

  <Head>
        <title>Stay Connected, Stay Informed</title>
        <meta
          name="description"
          content="Connect with HRS Camp on social media to stay updated on industry insights, job market trends, and career opportunities."
        />
      </Head>
      <section className="section-h section-h-getintouch">
        <div className="container">
          <div className="get-in-touch">
            <div className="row g-3 align-items-center">
              <div className="col-lg-6">
                <div className="get-in-headings">
                  <h1 className="main-heading mb-5">
                    Stay Connected, <br />
                    Stay Informed
                  </h1>
                </div>
                <Image className="img-heading w-75 mb-5" src={StayConnectedleftImg} alt="Get in touch"/>
              </div>
              <div className="col-lg-6">
              <Image className="img-heading mb-5 stay-right-img" src={StayConnectedrightImg} alt="Get in touch"/>
                <div className="get-in-paragraph my-3">
                  <p>
                    Connect with HRS Camp on our dynamic social media pages. Follow us on Facebook, Instagram,
                    LinkedIn, and more to access the latest industry insights, job market trends, and exciting
                    career opportunities. Join our online community and stay informed with the click of a button.
                  </p>
                </div>
                <div className="social-icons">
                  <ul className="d-flex">
                    <li>
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src={facebookImg}
                          alt="Facebook"
                          width={90}
                          height={90}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src={twitterImg}
                          alt="Twitter"
                          width={90}
                          height={90}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          className="img-fluid"
                          src={linkdinImg}
                          alt="LinkedIn"
                          width={90}
                          height={90}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" section-h section-h-getintouch">
  <div className="d-flex align-items-center">
    <Image className="img-fluid" src={letsTalkImg} alt=""/>
  </div>
</section>
    </main>

  
  );
};

export default Contact ;
