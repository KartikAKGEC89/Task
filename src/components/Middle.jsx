import React from "react";
import support from "../assets/support.svg";
import rate from "../assets/rate.svg";
import email from "../assets/email.svg";
import email2 from "../assets/email2.svg";
import warehouse from "../assets/warehouse.svg";

const Moto = () => {
  return (
    <div className="moto">
      <div className="card">
        <img src={support} alt="support" />
        <p>Call us at anytime on 1200 779 437</p>
      </div>
      <div className="card">
        <img src={email} alt="email" />
        <p>See why more companies prefer Swift</p>
      </div>
      <div className="card">
        <img src={rate} alt="rate" />
        <p>Email the Team at Swift Transport Courier Division</p>
      </div>
      <div className="card">
        <img src={warehouse} alt="warehouse" />
        <p>Email the Team at Swift Containers Transport Division</p>
      </div>
      <div className="card">
        <img src={email2} alt="email2" />
        <p>Visit our warehousing and distribution center</p>
      </div>
    </div>
  );
};

export default Moto;
