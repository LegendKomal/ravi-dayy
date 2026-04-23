// Gift2.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sharedCSS } from "../components/Giftsharedstyles";
import { Cat, HeartHandshake } from "lucide-react";

const iconStyle = { display: "inline", verticalAlign: "middle" };

const Gift2 = () => (
  <>
    <style>{sharedCSS}</style>
    <div className="gr-page">
      <span className="gr-badge">✦ Gift II ✦</span>
      <h1 className="gr-heading blue">Congratulations!</h1>
      <div className="gr-rule" />
      <img src="images/Gcat.gif" alt="" className="gr-gif" />
      <p className="gr-text">
        You got the biggest gift —{" "}
        <strong>Me</strong>{" "}
        <Cat size={20} strokeWidth={2} color="#0ea5e9" style={iconStyle} />
      </p>
      <p className="gr-text">
  Meet me on <strong>discord</strong> around 7.{" "}
  Don't be late{" "}
  <HeartHandshake size={20} strokeWidth={2} color="#f43f5e" style={iconStyle} />
</p>
      <p className="gr-text lg">
        Happy Birthday, Babyyyy!! <br></br>I Love youu
      </p>
      <Link to="/gifts-for-you" className="gr-back">← Back</Link>
    </div>
  </>
);

export default Gift2;