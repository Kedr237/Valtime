import React from 'react';
import { useAppSelector } from "../../../../store/hooks";


export default function Brands () {

  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
  })));
  
  return (
    <ul className="brands">
      {brands.map(brand => 
          <li className="brands__el" key={brand.id}>{brand.name}
            <div className='brands__underline'></div>
          </li>
        )}
    </ul>
  );
}