// Gift1.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sharedCSS } from "../components/Giftsharedstyles";

const Gift1 = () => (
  <>
    <style>{sharedCSS}</style>
    <div className="gr-page">
      <span className="gr-badge">✦ Gift I ✦</span>
      <h1 className="gr-heading rose">Oh no!</h1>
      <div className="gr-rule" />
      <img src="images/circleCat.gif" alt="" className="gr-gif" />
      <p className="gr-text">
<p className="gr-text">
  You are supposed to pay <strong>Rs. 50</strong> {"<3"}
</p>
</p>
      <Link to="/gifts-for-you" className="gr-back">← Back</Link>
    </div>
  </>
);

export default Gift1;