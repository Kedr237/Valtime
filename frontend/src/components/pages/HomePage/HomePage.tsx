import React from "react";
import Brands from "./blocks/Brands";
import './homePage.scss';
import Presentation from "./blocks/Presentation";


export default function HomePage() {

  return (
    <div className="home-page wrapper">
      <Brands />
      <Presentation />
    </div>
  );
}