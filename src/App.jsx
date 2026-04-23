import React from "react";
import { Route, Routes } from "react-router-dom";
import Puzzle from "./components/Puzzle";
import Gift from "./components/Gift";
import Gift1 from "./components/Gift1";
import Gift2 from "./components/Gift2";
import Gift3 from "./components/Gift3";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Puzzle />} />
        <Route path="/gifts-for-you" element={<Gift />} />
        <Route path="/gift1" element={<Gift1 />} />
        <Route path="/gift2" element={<Gift2 />} />
        <Route path="/gift3" element={<Gift3 />} />
      </Routes>
    </div>
  );
};

export default App;
