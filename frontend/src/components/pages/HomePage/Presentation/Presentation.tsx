import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import SliderWatches from './SliderWatches';
import SomeWatches from "./SomeWatches";


export default function Presentation() {

  return (
    <div className="presentation clearfix">
      <SliderWatches />
      <SomeWatches />
    </div>
  );
}