import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { isEqual } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { setBasket } from '../../../../store/slices/basketSlice';
import { Watch } from '../../../../store/slices/watchesSlice';


export default function Products() {

  const navigate = useNavigate();

  function goWatch(id: number) {
    navigate('watch/' + String(id));
  }

  const filter = useAppSelector(state => state.filter);
  const watches = useAppSelector(state => state.watches.arr.map((watch: Watch) => ({
    id: watch.id,
    name: watch.name,
    price: watch.price,
    img: watch.mainPhoto,
    brand: watch.brand,
  })));
  type FlterWatches = typeof watches;
  const [sortedWatches, setSortedWatches] = useState<FlterWatches>(structuredClone(watches));
  const [memorizedWatches, setMemorizedWatches] = useState<FlterWatches>(structuredClone(watches));

  useEffect(() => {
    if (!isEqual(watches, memorizedWatches)) {
      setMemorizedWatches(structuredClone(watches));
    }
  }, [watches]);

  function validate(str: string) {
    return str.replace(/\s+/g, ' ').trim().toLowerCase();
  }
  function validatePrice(str: string) {
    return Number(str.replace(/\s+/g, ''));
  }

  useEffect(() => {
    let newSortedWatches: FlterWatches = structuredClone(memorizedWatches);
    if (filter.brands.length > 0) {
      newSortedWatches = newSortedWatches.filter(watch => 
        filter.brands.includes(watch.brand)
        );
    }
    if (filter.name) {
      newSortedWatches = newSortedWatches.filter(watch => 
        validate(filter.name).split(' ').some(str => 
          validate(watch.name).includes(str) || 
          String(validatePrice(watch.price)).includes(str)
          )
        );
    }
    if (filter.priceSort == 'descending') {
      newSortedWatches.sort((a, b) => validatePrice(b.price) - validatePrice(a.price))
    }
    if (filter.priceSort == 'ascending') {
      newSortedWatches.sort((a, b) => validatePrice(a.price) - validatePrice(b.price))
    }
    if (filter.priceUpTo) {
      newSortedWatches = newSortedWatches.filter(watch => validatePrice(watch.price) <= filter.priceUpTo)
    }
    if (filter.priceFrom) {
      newSortedWatches = newSortedWatches.filter(watch => validatePrice(watch.price) >= filter.priceUpTo)
    }
    setSortedWatches(newSortedWatches);
  }, [filter, memorizedWatches])

  
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
      if (circle) {
        circle.style.opacity = '1';
      }
    }
  }
  useEffect(() => {
    watches.map(watch => {
      const circle = document.querySelector(`.products__circle_${watch.id}`) as HTMLDivElement;
      if (basket.includes(watch.id)) {
        if (circle) {
          circle.style.opacity = '1';
        }
      } else {
        if (circle) {
          circle.style.opacity = '0';
        }
      }
    })
  }, [basket]);


  return (
    <div className="products">
      {sortedWatches.map(watch => 
        <div key={watch.id} className="products__block">
          <div className="products__cover"></div>
          <div className={`products__circle  products__circle_${watch.id}`}></div>
          <div className="products__backet" onClick={e => handleBasket(watch.id)}></div>
          <img className='products__img' onClick={() => goWatch(watch.id)} src={watch.img} alt="Часы" />
          <p className="products__name">{watch.name}</p>
          <p className="products__price">{watch.price}</p>
      </div>
      )}
    </div>
  );
}