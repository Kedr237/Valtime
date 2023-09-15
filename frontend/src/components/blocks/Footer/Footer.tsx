import './footer.scss';
import React from 'react';

export default function Footer() {

  return (
    <footer className='footer'>
      <div className="wrapper footer__wrapper">
        <ul className="footer__block">
          <p className='footer__title'>Каталог</p>
          <li className='footer__position'>Бренд</li>
          <li className='footer__position'>Бренд</li>
          <li className='footer__position'>Бренд</li>
          <li className='footer__position'>Бренд</li>
          <li className='footer__position'>Бренд</li>
        </ul>
        <ul className="footer__block">
          <p className='footer__title'>Связь</p>
          <li className='footer__position'>email@email.com</li>
          <li className='footer__position'>email@email.com</li>
        </ul>
      </div>
    </footer>
  );
}