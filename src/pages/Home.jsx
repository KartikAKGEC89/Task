import React from 'react'
import Navbar2 from '../components/Navbar2'
import './pages.css'
import Truck from '../assets/Rectangle 9.png'
import Arrow from '../assets/Arrow 1.png'
import Arrow2 from '../assets/Arrow2.png'
import Rail from '../assets/truck 1.png'
import House from '../assets/container (4) 1.png'
import Contain from '../assets/train-cargo (1) 1.png'
import Truk from '../assets/warehouse 2.png'
import Secure from '../assets/warehouse 2.png'
const Home = () => {
  return (
    <>
      <Navbar2 />

      
      <div className='homeHero'>
      <div>
        <h3 style={{
          fontSize: "2.6vw",
          marginBottom: "1.3vw",
          lineHeight: "3vw",
        }}>
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
          <img src={Truck} alt="truck" />
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
              <img src={Rail} alt='rail'/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Empty Container Depots</p>
            <div className="image">
              <img src={Contain} alt='conatiner'/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Warehousing – 3PL, FAK and eCommerce</p>
            <div className="image">
              <img src={House} alt='house'/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Transport - Container, Tautliner, Bulk</p>
            <div className="image">
              <img src={Truk} alt='truck'/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flexCol">
            <p className="bigTxt1">Bio-Security & Border Security (Customs)</p>
            <div className="image">
              <img src={Secure} alt='secuer'/>
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={Arrow2} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
