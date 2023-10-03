import React from 'react';
import { useAppSelector } from '../../../../store/hooks';

export default function AboutUs() {

  const desc = useAppSelector(state => state.aboutUs.arr[0].description);


  return (
    <div className="about-us">
      <h3 className="about-us__title">О нас</h3>
      <p className="abou-us__desc">{desc}</p>
    </div>
  )
}