import './watchPage.scss';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setBasket } from '../../../store/slices/basketSlice';
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Watch } from '../../../store/slices/watchesSlice';


export default function WatchPage() {

  const { id } = useParams();
  const watch = useAppSelector(state => state.watches.arr.filter((watch: Watch) => watch.id == Number(id))[0]);

  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basket.arr);
  function handleBasket(id:number) {
    const circle = document.querySelector(`.products__circle_${id}`) as HTMLDivElement;
    if (basket.includes(id)) {
      dispatch(setBasket(basket.filter(el => el != id)));
      if (circle) {
        circle.style.opacity = '0';
      }
    } else {
      dispatch(setBasket([...basket, id]));
      circle.style.opacity = '1';
    }
  }

  useEffect(() => {
    const circle = document.querySelector(`.products__circle_${watch.id}`) as HTMLDivElement;
    if (basket.includes(watch.id)) {
      if (circle) {
        circle.style.opacity = '1';
      }
    } else {
      circle.style.opacity = '0';
    }
  }, [basket]);

  if (watch) {
    return (
      <div className="watch-page">
  
        <div className="watch-main">
          <img src={watch.mainPhoto} alt="Фото часов" className="watch-main__img" />
          <div className="watch-main__desc">
            <div className="watch-main__basket">
              <div className={`products__circle  products__circle_${watch.id}`}></div>
              <div className="products__backet" onClick={e => handleBasket(watch.id)}></div>
            </div>
            <p className="watch-main__titile">{watch.name}</p>
            <p className='watch-main__price'>{watch.price}</p>
            <div className="watch-main__features">
              <p className='watch-main__chars'>Характеристики</p>
              <ul className="watch-main__ul">
                <li className="watch-main__li">Бренд: {watch.brand}</li>
                <li className="watch-main__li">Механизм: {watch.mechanism}</li>
                <li className="watch-main__li">Материал: {watch.material}</li>
                <li className="watch-main__li">Цвет: {watch.color}</li>
                <li className="watch-main__li">Влагозащита: {watch.waterProtection}</li>
                <li className="watch-main__li">Размер: {watch.size}</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="watch-desc">
          <div className="watch-desc__desc">Описание</div>
          <div className="watch-desc__text">{watch.description}</div>
        </div>
  
      </div>
    )
  }
  else {
    return (
      <div>Загрузка</div>
    )
  }
}