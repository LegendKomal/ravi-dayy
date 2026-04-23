// Gift.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; }

  .g-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #e8f4ff 0%, #f8fbff 50%, #eef2ff 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .g-page::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147,197,253,0.4) 0%, transparent 70%);
    pointer-events: none;
  }

  .g-badge {
    font-size: 0.68rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #3b82f6;
    background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.2);
    border-radius: 999px;
    padding: 0.28rem 1rem;
    margin-bottom: 1rem;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }

  .g-heading {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2.8rem;
    color: #0f172a;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.25rem;
    position: relative;
    z-index: 1;
  }

  .g-heading .blue { color: #3b82f6; font-style: italic; }

  .g-rule {
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #7dd3fc);
    border-radius: 2px;
    margin: 1rem auto;
    position: relative;
    z-index: 1;
  }

  .g-gif {
    width: 160px;
    border-radius: 0;
    background: transparent;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 8px 20px rgba(59,130,246,0.15));
  }

  .g-sub {
    font-size: 1.05rem;
    color: #475569;
    font-style: italic;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .g-gifts {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .g-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
  }

  .g-card:hover { transform: translateY(-10px); }

  .g-card-box {
    width: 96px;
    height: 96px;
    background: #fff;
    border: 1.5px solid rgba(147,197,253,0.5);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 24px rgba(59,130,246,0.12), 0 2px 6px rgba(0,0,0,0.05);
    transition: box-shadow 0.28s ease, border-color 0.28s ease;
  }

  .g-card:hover .g-card-box {
    box-shadow: 0 16px 40px rgba(59,130,246,0.28), 0 4px 12px rgba(0,0,0,0.06);
    border-color: #3b82f6;
  }

  .g-card-box img {
    width: 58px;
    height: 58px;
    object-fit: contain;
    transition: transform 0.28s ease;
  }

  .g-card:hover .g-card-box img { transform: scale(1.12) rotate(-6deg); }

  .g-card-lbl {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #94a3b8;
    font-weight: 500;
  }
`;

const Gift = () => {
  const nav = useNavigate();
  return (
    <>
      <style>{css}</style>
      <div className="g-page">
        <span className="g-badge">✦ Puzzle Complete ✦</span>
        <h1 className="g-heading">Good job,<br /><span className="blue">Babyy!!</span></h1>
        <div className="g-rule" />
        <img src="images/happyCat.gif" alt="" className="g-gif" />
        <p className="g-sub">Now choose your gift </p>
        <div className="g-gifts">
          {["/gift1", "/gift2", "/gift3"].map((path, i) => (
            <div key={i} className="g-card" onClick={() => nav(path)}>
              <div className="g-card-box">
                <img src="images/Gift.png" alt="Gift" />
              </div>
              <span className="g-card-lbl">Gift {["I","II","III"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gift;