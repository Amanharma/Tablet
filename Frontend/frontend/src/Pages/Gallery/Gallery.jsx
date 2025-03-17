import React from "react";
import Nav from "../Home/Nav";
import GalleryMain from "./GalleryMain";
import DiabitiesHero from "../Diseases/Diabities/DiabitiesHero";
import Footer from "../Home/Footer";
const Gallery = () => {
  return (
    <div>
      <Nav />

      <DiabitiesHero />
      <GalleryMain />
      <Footer />
    </div>
  );
};

export default Gallery;
