// PuzzlePiece.jsx
import React from "react";

const PuzzlePiece = ({ image, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "110px",
        height: "110px",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "filter 0.2s ease",
        filter: isSelected ? "brightness(1.2) drop-shadow(0 0 10px rgba(96,165,250,1))" : "brightness(1)",
        outline: isSelected ? "3px solid #60a5fa" : "none",
        outlineOffset: "-3px",
        zIndex: isSelected ? 2 : 1,
        flexShrink: 0,
      }}
    >
      {isSelected && (
        <div style={{ position:"absolute", inset:0, background:"rgba(96,165,250,0.2)", zIndex:1, pointerEvents:"none" }} />
      )}
      <img src={image} alt="Puzzle Piece" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
    </div>
  );
};

export default PuzzlePiece;