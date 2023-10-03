import { useAppSelector } from '../../../store/hooks';
import './footer.scss';
import React from 'react';

export default function Footer() {

  const brands = useAppSelector(state => state.brands.arr.map(brand => ({
    id: brand.id,
    name: brand.name,
  })));
  const contacts = useAppSelector(state => state.aboutUs.arr[0].contacts);

  return (
    <footer className='footer'>
      <div className="wrapper footer__wrapper">
        <ul className="footer__block">
          <p className='footer__title'>Каталог</p>
          {brands.map(brand => 
            <li className='footer__position' key={brand.id}>{brand.name}</li>
          )}
        </ul>
        <ul className="footer__block">
          <p className='footer__title'>Связь</p>
          {contacts.map(contact => 
            <li key={contact} className='footer__position'>{contact}</li>
            )}
        </ul>
      </div>
    </footer>
  );
}