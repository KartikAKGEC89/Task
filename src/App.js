import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WhySwift from "./Pages/WhySwift";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whySwift" element={<WhySwift />} />
      </Routes>
    </>
  );
}

export default App;
