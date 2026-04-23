// Gift3.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sharedCSS } from "../components/Giftsharedstyles";
import { CatIcon } from "lucide-react";

const iconStyle = { display: "inline", verticalAlign: "middle" };

const Gift3 = () => (
  <>
    <style>{sharedCSS}</style>
    <div className="gr-page">
      <span className="gr-badge">✦ Gift III ✦</span>
      <h1 className="gr-heading rose">Oh oh!</h1>
      <div className="gr-rule" />
      <img src="images/huh.gif" alt="" className="gr-gif" />
      <p className="gr-text">
        You got nothing, Babyy{" "}
        <CatIcon size={20} strokeWidth={2} color="#f43f5e" style={iconStyle} />
      </p>
      <p className="gr-text" style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
        Better luck next time, my lovee…
      </p>
      <Link to="/gifts-for-you" className="gr-back">← Back</Link>
    </div>
  </>
);

export default Gift3;