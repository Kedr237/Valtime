import React, { useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';


export default function Filter() {

  const [priceSort, SetPriceSort] = useState('По убыванию');
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceUpTo, setPriceUpTo] = useState(0);
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
  })));

  function focusInput() {
    const input: HTMLElement | null = document.querySelector('.filter__input');
    input?.focus();
  }
  function selectClick(el: string) {
    const options: HTMLElement | null = document.querySelector(el);
    if (options) {
      const styles = getComputedStyle(options);
      styles.transform == 'matrix(1, 0, 0, 0, 0, 0)'
      ? options.style.transform = 'scaleY(100%)'
      : options.style.transform = 'scaleY(0)';
    }
  }
  function handleOptionPrice(option: string) {
    SetPriceSort(option);
  }
  function brandClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) {
    const el = e.target as HTMLElement;
    if (el.getAttribute('data-marker') == 'none') {
      el.setAttribute('data-marker', 'checked');
      el.classList.add('filter__option-brand_cheched');
      setFilterBrands([...filterBrands, name])
    } else {
      el.setAttribute('data-marker', 'none');
      el.classList.remove('filter__option-brand_cheched');
      setFilterBrands(filterBrands.filter(brand => brand != name))
    }
  }


  return (
    <div className='filter'>
      <div className="filter__search" onClick={focusInput}>
        <img src={require('./search-icon.svg').default} alt="Поиск" className="filter__search-icon" />
        <input type="text" className="filter__input" />
      </div>

      <div className="filter__wrapper">
        <p className="filter__title">Цена</p>
        <div className="filter__select" onClick={() => selectClick('.filter__options_price')}>
          <div className="filter__current">
            <div className='filter__select-icon' />
            <p className="filter__selected">{priceSort}</p>
          </div>
          <div className="filter__options filter__options_price">
            <p className="filter__option" onClick={() => handleOptionPrice('По убыванию')}>По убыванию</p>
            <p className="filter__option" onClick={() => handleOptionPrice('По возрастанию')}>По возрастанию</p>
          </div>
        </div>
        <div className="filter__limit">
          <span className="filter__limit-p">От</span>
          <input className="filter__limit-input" type='number' onChange={e => setPriceFrom(Number(e.target.value))}></input>
        </div>
        <div className="filter__limit">
          <span className="filter__limit-p">До</span>
          <input className="filter__limit-input" type='number' onChange={e => setPriceUpTo(Number(e.target.value))}></input>
        </div>

        <div className="filter__brand">
        <p className="filter__title">Бренды</p>
        <div className="filter__select">
          <div className="filter__current" onClick={() => selectClick('.filter__options_brands')}>
            <div className="filter__select-icon" />
            <p className="filter__selected">{filterBrands.length > 0 ? 'Выбранные' : 'Все'}</p>
          </div>
          <div className="filter__options filter__options_brands">
            {brands.map(brand => 
            <div data-marker="none" key={brand.id} className="filter__option filter__option-brand" onClick={e => brandClick(e, brand.name)}>{brand.name}</div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}