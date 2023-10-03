import React from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../../../store/hooks';
import { useNavigate } from 'react-router-dom';


export default function SomeWatches() {
  
  const watches = useAppSelector(state => state.watches.arr.map(watch => ({
    id: watch.id,
    name: watch.name,
    price: watch.price,
    img: watch.mainPhoto,
  })));
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }

  const navigate = useNavigate();
  function goWatch(id: number) {
    navigate('watch/' + String(id));
  }
  
  return (
    <div className="some-watches">
      <div className="some-watches__block">
        <p className='some-watches__limit'>До 15 000</p>
        <Slider {...settings}>
          {watches.filter(watch => Number(watch.price.replace(/\s/g, "")) < 15_000).map(watch => 
            <div key={watch.id} className='some-watches__slider'>
              <img className='some-watches__img' src={watch.img} alt="Часы" onClick={() => goWatch(watch.id)} />
              <p className='some-watches__name'>{watch.name}</p>
              <p className='some-watches__price'>{watch.price}</p>
            </div>
            )}
        </Slider>
      </div>
      <div className='some-watches__underline'></div>
      <div className="some-watches__block">
        <p className='some-watches__limit'>От 15 000</p>
        <Slider {...settings}>
          {watches.filter(watch => Number(watch.price.replace(/\s/g, "")) >= 15_000).map(watch => 
            <div key={watch.id} className='some-watches__slider'>
              <img className='some-watches__img' src={watch.img} alt="Часы" onClick={() => goWatch(watch.id)} />
              <p className='some-watches__name'>{watch.name}</p>
              <p className='some-watches__price'>{watch.price}</p>
            </div>
            )}
        </Slider>
      </div>
    </div>
  );
}