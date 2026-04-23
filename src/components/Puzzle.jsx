// Puzzle.jsx
import React, { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
import PuzzlePiece from "./PuzzlePiece";
import { Link } from "react-router-dom";
import { Sparkles, Star, Gift } from "lucide-react";

const images = [
  "images/p1.png",
  "images/p2.png",
  "images/p3.png",
  "images/p4.png",
  "images/p5.png",
  "images/p6.png",
  "images/p7.png",
  "images/p8.png",
  "images/p9.png",
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pz-page {
    min-height: 100vh;
    width: 100%;
    background: #f0f6ff;
    background-image:
      linear-gradient(135deg, #e8f4ff 0%, #f8fbff 40%, #eef2ff 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 5rem;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .pz-page::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147,197,253,0.35) 0%, transparent 70%);
    pointer-events: none;
  }
  .pz-page::after {
    content: '';
    position: absolute;
    bottom: -100px; left: -100px;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%);
    pointer-events: none;
  }

  .pz-hero {
    width: 200px;
    filter: drop-shadow(0 8px 24px rgba(59,130,246,0.2));
    position: relative;
    z-index: 1;
  }

  .pz-card {
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(147,197,253,0.4);
    border-radius: 20px;
    padding: 1.5rem 2rem;
    text-align: center;
    max-width: 360px;
    width: 100%;
    margin-top: -1rem;
    box-shadow: 0 8px 40px rgba(59,130,246,0.1), 0 2px 8px rgba(0,0,0,0.05);
    position: relative;
    z-index: 2;
  }

  .pz-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #3b82f6;
    background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.2);
    border-radius: 999px;
    padding: 0.25rem 0.85rem;
    margin-bottom: 0.85rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
  }

  .pz-heading {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2rem;
    color: #0f172a;
    line-height: 1.15;
    margin-bottom: 0.35rem;
  }

  .pz-heading .blue { color: #3b82f6; font-style: italic; }
  .pz-heading .sky { color: #0ea5e9; }

  .pz-rule {
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #7dd3fc);
    border-radius: 2px;
    margin: 0.85rem auto;
  }

  .pz-sub {
    font-size: 0.82rem;
    color: #64748b;
    letter-spacing: 0.05em;
    font-weight: 400;
  }

  .pz-grid-wrap {
    position: relative;
    z-index: 2;
    margin-top: 1.75rem;
    border-radius: 14px;
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.5),
      0 16px 48px rgba(59,130,246,0.18),
      0 4px 12px rgba(0,0,0,0.08);
  }

  .pz-grid {
    display: grid;
    grid-template-columns: repeat(3, 110px);
    grid-template-rows: repeat(3, 110px);
    gap: 0;
    line-height: 0;
    font-size: 0;
  }

  .pz-solved-area {
    margin-top: 1.75rem;
    text-align: center;
    animation: slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
    position: relative;
    z-index: 2;
    background: transparent;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .pz-solved-msg {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #1e40af;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    background: transparent;
  }

  .pz-gift-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 2.4rem;
    background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(59,130,246,0.45);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .pz-gift-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(59,130,246,0.55);
  }
`;

const Puzzle = () => {
  const [pieces, setPieces] = useState([]);
  const [selectedPieceIndex, setSelectedPieceIndex] = useState(null);
  const [showbutton, setShowButton] = useState(false);

  useEffect(() => {
    const shuffledImages = shuffle(images);
    setPieces(shuffledImages.map((image, index) => ({ id: index, image })));
  }, []);

  const handleClick = (index) => {
    if (selectedPieceIndex === null) {
      setSelectedPieceIndex(index);
    } else {
      if (index !== selectedPieceIndex) {
        const newPieces = [...pieces];
        [newPieces[index], newPieces[selectedPieceIndex]] = [newPieces[selectedPieceIndex], newPieces[index]];
        setPieces(newPieces);
        if (newPieces.map(p => p.image).join(",") === images.join(",")) {
          setShowButton(true);
        }
      }
      setSelectedPieceIndex(null);
    }
  };

  return (
    <>
      <style>{css}</style>
      <div className="pz-page">
        <img src="images/hiro.png" alt="" className="pz-hero" />

        <div className="pz-card">
          <span className="pz-badge">
            <Sparkles size={11} strokeWidth={2} />
            Hey Babyy
            <Sparkles size={11} strokeWidth={2} />
          </span>
          <h1 className="pz-heading">
            <span className="sky">Cheers</span> to another{" "}
            <span className="blue">beautiful year</span>
          </h1>
          <div className="pz-rule" />
          <p className="pz-sub">Solve the puzzle to claim your gift</p>
        </div>

        <div className="pz-grid-wrap">
          <div className="pz-grid">
            {pieces.map((piece, index) => (
              <PuzzlePiece
                key={piece.id}
                image={piece.image}
                onClick={() => handleClick(index)}
                isSelected={index === selectedPieceIndex}
              />
            ))}
          </div>
        </div>

        {showbutton && (
          <div className="pz-solved-area">
            <p className="pz-solved-msg">
              <Star size={18} fill="#3b82f6" color="#3b82f6" strokeWidth={0} />
              You did it! Get your gifts baby!!!!
            </p>
            <Link to="/gifts-for-you">
              <button className="pz-gift-btn">
                <Gift size={18} fill="#3b82f6" color="#ffffff" strokeWidth={0} />
                Open Gift
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Puzzle;