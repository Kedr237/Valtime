import React from "react";
import Brands from "./Presentation/Brands";
import './homePage.scss';
import Presentation from "./Presentation/Presentation";
import Catalog from "./Catalog/Catalog";
import AboutUs from "./Presentation/AboutUs";


export default function HomePage() {

  return (
    <div className="home-page wrapper">
      <Brands />
      <Presentation />
      <Catalog />
      <AboutUs />
    </div>
  );
}