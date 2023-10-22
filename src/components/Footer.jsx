import React, { useState } from "react";
import downArrow from "../assets/downArrow.svg"
import upArrow from "../assets/upArrow.svg"
import fb from "../assets/facebook.svg"
import insta from "../assets/insta.svg"
import x from "../assets/x.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {

  const [infoAccordian,setInfoAccordian] = useState(false)
  const [truckAccordian,setTruckAccordian] = useState(false)
  const [transportAccordian,setTransportAccordian] = useState(false)
  return (
    <div>
      <div className="footer">
        <div className="smlFoot">
          <h3>INFORMATION</h3>
          <div>About us</div>
          <div>Carrers</div>
          <div>Driver safety</div>
          <div>Contact Us</div>
          <div>Terms of use</div>
          <div>Privacy Policy</div>
        </div>
        <div className="smlFoot">
          <h3>CONTAINER TRANSPORT</h3>
          <div>Convenience</div>
          <div>Location</div>
          <div>Live Unloads</div>
          <div>Side Loader Drops</div>
          <div>Imports and Exports</div>
          <div>50T Onsite Forklift</div>
          <div>Oversize, Overweight</div>
          <div>Dangerous Goods</div>
          <div>24/7 Operations</div>
          <div>Company Owned Fleet</div>
        </div>
        <div className="smlFoot">
          <h3>Complete warehousing solutions</h3>
          <div>Short & Long Term</div>
          <div>Indoor & Outdoor Storage</div>
          <div>Racked, Dry & Floor Stacked</div>
          <div>Distribution</div>
          <div>Import, Unpack, Pack, Ship</div>
          <div>Sub-Leasing</div>
          <div>Secure Facilities</div>
          <div>Barcode Scanning</div>
        </div>
      </div>
      <div className="mobFooter">
        <div>
          <div>
            <p>INFORMATION</p>
            {infoAccordian ? <img onClick={()=>setInfoAccordian(false)} src={upArrow} alt="pic"/> :<img onClick={()=>setInfoAccordian(true)} src={downArrow} alt="pic"/>}
          </div>
          {infoAccordian && <ul className="smlFoot">
            <li>About us</li>
            <li>Carrers</li>
            <li>Driver safety</li>
            <li>Contact Us</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>}
        </div>
        <div>
          <div>
            <p>TAXI & COURIER TRUCKS</p>
            {truckAccordian ? <img onClick={()=>setTruckAccordian(false)} src={upArrow} alt="pic" /> :<img onClick={()=>setTruckAccordian(true)} src={downArrow} alt="pic" />}
          </div>
          {truckAccordian && <ul className="smlFoot">
            <li>Versatile Fleet</li>
            <li>Safety & Training</li>
          </ul>}
        </div>
        <div>
          <div>
            <p>CONTAINER TRANSPORT</p>
            {transportAccordian ? <img onClick={()=>setTransportAccordian(false)} src={upArrow} alt="pic"/> :<img onClick={()=>setTransportAccordian(true)} src={downArrow} alt="pic" />}
          </div>
          {transportAccordian && <ul className="smlFoot">
            <li>Convenience</li>
            <li>Location</li>
            <li>Live Unloads</li>
            <li>Side Loader Drops</li>
            <li>Imports and Exports</li>
            <li>50T Onsite Forklift</li>
            <li>Oversize, Overweight</li>
            <li>Dangerous Goods</li>
            <li>24/7 Operations</li>
            <li>Company Owned Fleet</li>
          </ul>}
        </div>
        <hr className="ruler" />
        <center><b>Social Media</b></center>
        <div className="logos">
          <img src={fb} alt="pic"/>
          <img src={x} alt="pic"/>
          <img src={insta} alt="pic"/>
          <img src={linkedin} alt="pic"/>
        </div>
        <hr className="ruler" />
        <center>© 2014 Swift Transport. All rights reserved.</center>
      </div>
    </div>
  );
};

export default Footer;
