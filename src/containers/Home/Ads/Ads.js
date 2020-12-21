import React from "react";
import "./Ads.css";
import AdImage from "../../../assets/Ads.jpg";

// ------ADS component-------//

function Ads() {
  return (
    <div className="Ads no-gutters">
      <img src={AdImage} alt="Advertise" />
    </div>
  );
}

export default Ads;
