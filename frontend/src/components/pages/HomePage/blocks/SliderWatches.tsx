import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import Slider from 'react-slick';

export default function SliderrWatches() {

  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
    gif: brand.mainGif,
  })));
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 8000,
    autoplay: true,
  };
  const prev: HTMLElement | null = document.querySelector('.slick-prev')
  const next: HTMLElement | null = document.querySelector('.slick-next')
  const underline: HTMLElement | null = document.querySelector('.slider-watches__underline')
  

  function buttonHandlerEnterPrev() {
    if (underline) {
      underline.style.removeProperty('right');
      underline.style.width = '27%';
      underline.style.left = '0';
    }
  }
  function buttonHandlerEnterNext() {
    if (underline) {
      underline.style.removeProperty('left');
      underline.style.width = '27%';
      underline.style.right = '0';
    }
  }
  function buttonHandlerLeavePrev() {
    if (underline) {
      underline.style.width = '0';
      underline.style.left = '0';
    }
  }
  function buttonHandlerLeaveNext() {
    if (underline) {
      underline.style.width = '0';
      underline.style.right = '0';
    }
  }

  useEffect(() => {
    prev?.addEventListener('click', buttonHandlerEnterPrev);
    prev?.addEventListener('mouseenter', buttonHandlerEnterPrev);
    prev?.addEventListener('mouseleave', buttonHandlerLeavePrev);
    next?.addEventListener('click', buttonHandlerEnterNext);
    next?.addEventListener('mouseenter', buttonHandlerEnterNext);
    next?.addEventListener('mouseleave', buttonHandlerLeaveNext);

  });
  
  return (
    <div className="slider-watches">
        <Slider {...settings}>
          {brands.map(brand => 
          <div key={brand.id} className="slider-watches__block">
            <img src={brand.gif} alt="Презентация часов бренда" className='slider-watches__img' />
            <h2 className='slider-watches__name'>{brand.name}</h2>
          </div>
            )}
        </Slider>
        <div className='slider-watches__underline'></div>
    </div>
  );
}