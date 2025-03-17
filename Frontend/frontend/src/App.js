import React from "react";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/signup/signup"; // ✅ Capitalized
import Login from "./Pages/login/login"; // ✅ Capitalized
import Aboutus from "./Pages/Aboutus/Aboutus";
import Gallery from "./Pages/Gallery/Gallery";
import Diabities from "./Pages/Diseases/Diabities/Diabities";
import Parkinson from "./Pages/Diseases/Parkinson/Parkinson";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breastcancer from "./Pages/Diseases/Breastcancer/Breastcancer";
import WorkingOnItPage from "./Pages/Home/Pagenotfound";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/diseases/diabities" element={<Diabities />} />
        <Route path="/diseases/Parkinson" element={<Parkinson />} />
        <Route path="/diseases/Breastcancer" element={<Breastcancer />} />
        <Route path="/WorkingOnItPage" element={<WorkingOnItPage />} />
      </Routes>
    </Router>
  );
};

export default App;
