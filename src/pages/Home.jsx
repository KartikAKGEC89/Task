import React from "react";
import Navbar2 from "../components/Navbar2";
import Middle from "../components/Middle";
import Footer from "../components/Footer";
import truck from "../assets/truck.svg";
import truk from "../assets/truk.svg";
import rail from "../assets/rail.svg";
import contain from "../assets/contain.svg";
import house from "../assets/house.svg";
import secure from "../assets/secure.svg";
import orange from "../assets/orangeArrow.svg";
import white from "../assets/whiteArrow.svg";
import good from "../assets/good.svg";
import card from "../assets/card.svg";
import truckTwo from "../assets/truckTwo.svg";
import abc from "../assets/abc.svg";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const Home = () => {
  return (
    <>
      
      <Navbar2 />
      
      <div className="homeHero">
        <div>
          <h3
            style={{
              fontSize: "2.6vw",
              marginBottom: "1.3vw",
              lineHeight: "3vw",
            }}
          >
            Cheaper delivery costs through innovative vehicle design
          </h3>
          <h5 style={{ fontSize: "1.5vw", lineHeight: "2vw" }}>
            OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU'LL BE
            PLEASANTLY SUPRISED
          </h5>
          <p style={{ fontSize: "1.2vw" }}>
            <b>
              <u>Taxi and Courier truck</u>
            </b>
          </p>
        </div>
      </div>
      
      <div className="home">
        <div className="redBack">
          <div className="blueBack">
            <h2
              className="truckTxt"
              style={{ fontSize: "2.2vw", lineHeight: "3vw" }}
            >
              A fleet capable of much more than you’d think
            </h2>
            <div className="smlTruckTxt" style={{ fontSize: "1.4vw" }}>
              With a diverse range of utes, trucks and semi-trailers, Swift
              Transport is capable of much more than you'd think. Combine our
              versatile fleet wth our industry leading technology and 'can-do'
              attitude for a winning logistics partnership with your
              organization.
            </div>
            <div className="smlTruckTxt2" style={{ fontSize: "1.8vw" }}>
              <u>WHYSWIFT</u>
            </div>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </div>
     
      <div className="service">
        <h3>Services</h3>
        <p className="smlTxt">
          A <span>smarter</span> container transport business
        </p>
        <p className="vsmlTxt">
          AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE
          LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.
        </p>
        <div className="flexContainer">
          <div className="flexCard">
            <p className="bigTxt1">Intermodal Rail terminal</p>
            <div className="image">
              <img src={rail} alt="pic"/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Empty Container Depots</p>
            <div className="image">
              <img src={contain} alt="pic"/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Warehousing – 3PL, FAK and eCommerce</p>
            <div className="image">
              <img src={house} alt="pic" />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Transport - Container, Tautliner, Bulk</p>
            <div className="image">
              <img src={truk} alt="pic"/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCol">
            <p className="bigTxt1">Bio-Security & Border Security (Customs)</p>
            <div className="image">
              <img src={secure} alt="pic"/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={white} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="redBack3">
        <p
          style={{
            display: "flex",
            fontWeight: "bold",
            color: "white",
            fontSize: "2vw",
          }}
        >
          News
        </p>
        <div className="flexContainer ">
          <div className="flexCard2">
            <img src={img1} alt="pic"/>
            <p
              style={{
                fontSize: "1.8vw",
                margin: "1vw",
              }}
            >
              Asia-US container rates tick lower; Canada port strike enters 7th
              day
            </p>
            <p
              style={{
                fontSize: "1.2vw",
                margin: "1vw",
              }}
            >
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones){" "}
            </p>
            <p
              style={{
                color: "#ED1B24",
                fontWeight: "bold",
                margin: "1vw",
                fontSize: "1.4vw",
              }}
            >
              Read more
            </p>
          </div>

          <div className="flexCard2">
            <img src={img2} alt="pic"/>
            <p
              style={{
                fontSize: "1.8vw",
                margin: "1vw",
              }}
            >
              World Shipping Council Releases Containers Lost At Sea Report
            </p>
            <p
              style={{
                fontSize: "1.2vw",
                margin: "1vw",
              }}
            >
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones)
            </p>
            <p
              style={{
                color: "#ED1B24",
                fontWeight: "bold",
                margin: "1vw",
                fontSize: "1.4vw",
              }}
            >
              Read more
            </p>
          </div>

          <div className="flexCard2">
            <img src={img3} alt="pic"/>
            <p
              style={{
                fontSize: "1.8vw",
                margin: "1vw",
              }}
            >
              Top Shipping Stocks for Q2 2023
            </p>
            <p
              style={{
                fontSize: "1.2vw",
                margin: "1vw",
              }}
            >
              ZIM Integrated Shipping Services, Kirby Corp., and Ardmore
              Shipping are the top performers for value, growth, and momentum,
              respectively.
            </p>
            <p
              style={{
                color: "#ED1B24",
                fontWeight: "bold",
                margin: "1vw",
                fontSize: "1.4vw",
              }}
            >
              Read more
            </p>
          </div>
        </div>
      </div>

    
      <div className="contactUs">
        <div>
          <p>Have a question regarding Swift services?</p>
          <div style={{ display: "flex", fontWeight: "bold" }}>
            <p>Contact us</p>
            <img style={{ width: "4vw", marginLeft: "1vw" }} src={white} alt="pic" />
          </div>
        </div>
      </div>
      <div className="redBack2">
        <div className="redTxt">
          <p>You’ll be in good company</p>
          <img src={good} alt="pic"/>
        </div>
        <div className="redCard">
          <img src={card} alt="pic"/>
        </div>
      </div>
   
      <div className="truckTwo">
        <div className="tr2">
          <img src={truckTwo} style={{ height: "35vw" }} alt="pic"/>
        </div>
        <div>
          <p style={{ color: "#002A54", fontSize: "2vw", fontWeight: "bold" }}>
            We deliver, no matter how hard the challenge.
          </p>
          <img src={abc} style={{ height: "18vw" }} alt="pic"/>
          <p className="smlTxt" style={{ color: "white" }}>
            <u>Kennards Hire Case Study</u>
          </p>
        </div>
      </div>

      <Middle />
     
      <Footer />
    </>
  );
};

export default Home;