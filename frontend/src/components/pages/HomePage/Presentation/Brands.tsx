import React, { useEffect, useState } from 'react';
import { useAppSelector } from "../../../../store/hooks";


export default function Brands () {

  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
  })));
  function handleClick(name: string) {
    const els = document.querySelectorAll('.filter__option-brand');
    const scrollEl = document.getElementById('to-scroll');
    if (scrollEl) scrollEl.scrollIntoView({behavior: 'smooth'})
    els.forEach(el => {
      if (el?.getAttribute('data-marker') == 'checked') {
        el.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        }));
      }
    });
    setTimeout(() => {
      els.forEach(el => {
        if (el?.textContent == name) {
          el.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          }));
        }
      });
    }, 0);
  }

  return (
    <ul className="brands">
      {brands.map(brand => 
          <li className="brands__el" key={brand.id} onClick={() => handleClick(brand.name)}>{brand.name}
            <div className='brands__underline'></div>
          </li>
        )}
    </ul>
  );
}