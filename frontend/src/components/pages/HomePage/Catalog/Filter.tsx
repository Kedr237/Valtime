import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setFilter } from '../../../../store/slices/filterSlice';


export default function Filter() {

  const dispatch = useAppDispatch();
  const [priceSort, SetPriceSort] = useState<'ascending' | 'descending'>('descending');
  const [priceSortVisible, SetPriceSortVisible] = useState('По убыванию');
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceUpTo, setPriceUpTo] = useState(0);
  const [filterBrands, setFilterBrands] = useState<string[]>([]);
  const [search, SetSearch] = useState('');
  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
  })));

  useEffect(() => {
    dispatch(setFilter({
      priceSort: priceSort,
      priceFrom: priceFrom,
      priceUpTo: priceUpTo,
      brands: filterBrands,
      name: search,
    }));
  }, [priceSort, priceFrom, priceUpTo, filterBrands, search]);

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
    if (option == 'ascending') {
      SetPriceSortVisible('По возростанию');
    } else {
      SetPriceSortVisible('По убыванию');
    }
    SetPriceSort(option as 'ascending' | 'descending');
  }
  function brandClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) {
    const el = e.target as HTMLElement;
    if (el.getAttribute('data-marker') == 'none') {
      el.setAttribute('data-marker', 'checked');
      el.classList.add('filter__option-brand_cheched');
      setFilterBrands([...filterBrands, name]);
    } else {
      el.setAttribute('data-marker', 'none');
      el.classList.remove('filter__option-brand_cheched');
      setFilterBrands(filterBrands.filter(brand => brand != name));
    }
  }
  function searchHundler(e: React.ChangeEvent<HTMLInputElement>) {
    SetSearch(e.target.value);
  }


  return (
    <div className='filter'>
      <div className="filter__search" onClick={focusInput}>
        <img src={require('./search-icon.svg').default} alt="Поиск" className="filter__search-icon" />
        <input type="text" className="filter__input" onChange={searchHundler} />
      </div>

      <div className="filter__wrapper">
        <p className="filter__title">Цена</p>
        <div className="filter__select" onClick={() => selectClick('.filter__options_price')}>
          <div className="filter__current">
            <div className='filter__select-icon' />
            <p className="filter__selected">{priceSortVisible}</p>
          </div>
          <div className="filter__options filter__options_price">
            <p className="filter__option" onClick={() => handleOptionPrice('descending')}>По убыванию</p>
            <p className="filter__option" onClick={() => handleOptionPrice('ascending')}>По возрастанию</p>
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