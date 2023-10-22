import React from "react";
import Navbar from "../Components/Navbar";
import bgImg from "../Assets/bgImg.svg";
import "./Pages.css";
import swissImg from "../Assets/whySwissImg.svg";
import coatsHire from "../Assets/coatsHire.svg";
import system from "../Assets/system.svg";
import abc from "../Assets/abc.svg";
import Middle from "../Components/Middle";
import Footer from "../Components/Footer";
import img from "../Assets/img.svg";


const WhySwift = () => {
  const [placement] = React.useState("bottom");
  const [shape] = React.useState("dot");
  return (
<>
      <Navbar />
    
      <div className="bgImg">
        <img src={bgImg} alt="bgImg" />
        <div className="textFloat">
          <div className="bigTxt4">Why Swift Transport</div>
          <div className="smlTxt">
            Here from our loyal customers about why they’re happy to recommend
            us to you.
          </div>
        </div>
      </div>
      <div className="home">
        <div className="blueBg">
          <div className="homeTxt">
            <div className="bigTxt" id="big">
              <u>Why Swift Transport</u>
            </div>
            <div className="smlTxt2">
              Here from our loyal customers about why they’re happy to recommend
              us to you.
            </div>
            <div className="smlTxt3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </div>
            <button>Learn More</button>
          </div>
          <div className="homeBox">
            <div className="redBox"></div>
            <div className="redBox"></div>
          </div>
        </div>
      </div>
      <div className="whySwift">
        <div className="whiteBox">
          <h2 style={{fontSize: "3vw"}}>Why Swift</h2>
          <p style={{fontSize: "1.9vw"}}>
            As a supplier we are a responsive business partner that can ensure
            quality and supply. We value strong relationships with our customers
            and believe that commercial relationships are a learnt skill. Our
            integrated supply chain helps us to ensure a high standard of
            product quality and service delivery. This reduces the potential
            need for rework, increases reliability of service and saves our
            customers time and money. Swift Transport is a market leader
            providing flexible, client-focused on demand transport and 3PL
            services complimented by industry leading technology. We offer
            solutions that simultaneously improve efficiencies, consistency,
            reliability and bottom line savings for our clients' businesses.
          </p>
        </div>
        <div className="swissImg">
          <img src={swissImg} alt="swissImg" />
        </div>
      </div>
      <div className="caseStudy">
        <h2>Case Studies</h2>
        <div className="whiteBg">
          <div className="boxImg">
            <img src={coatsHire} alt="pic"/>
          </div>
          <div className="boxImg" id="abc">
            <img src={abc} alt="pic"/>
          </div>
          <div className="boxImg">
            <img src={system} alt="pic"/>
          </div>
        </div>
      </div>
      <div>
      <h2 className="testimonials">Testimonials</h2>
        <h3
          key={`${placement}.${shape}`}
          placement={placement}
          shape={shape}
          className="custom-slider"
        >
          <div className="carousal">
            <img src={img} alt="img" />
            <div>
              <p>
                We use Swift Transport for a few different outcomes, relocate
                equipment between Sydney and the Central Coast and an Hourly
                Work as Directed Service. We simply make a call and the next day
                a driver in a fully equipped ute arrives ready for work. When we
                need to send items to Sydney that are planned, it works out far
                better to use Swift than use our own vehicles. The vehicles are
                well presented, well fitted and the drivers are all very
                helpful, and the rate is always excellent.
              </p>
              <p className="name">Peter Santwyk, Allcott Hire, Nth Regional Area Mgr</p>
            </div>
          </div>
        </h3>
      </div>
      <Middle />
      <Footer />
    </>
  );
};

export default WhySwift;
