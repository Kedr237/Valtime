import React from 'react';
import Filter from './Filter';
import Products from './Products';

export default function Catalog() {

  return (
    <div className="catalog" id='to-scroll'>
      <h1 className='h1'>Весь каталог</h1>
      <Filter />
      <Products />
    </div>
  );
}