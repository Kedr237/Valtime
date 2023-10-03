import './header.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Basket from './Basket/Basket';

export default function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  function handleBasket() {
    const basket = document.querySelector('.basket');
    if (basket?.classList.contains('basket-trs')) {
      basket.classList.remove('basket-trs')
    } else {
      basket?.classList.add('basket-trs');
    }
  }

  return (

    <header className="header">
      <div className="wrapper header__wrapper">

      <p className="header__city">Доставка из Санкт-Петербурга</p>
      <img src={require('./logo.svg').default} alt="Logo" className="header__logo" onClick={goHome} />

      <nav className="header__nav">
        <div className="header__nav-item" onClick={() => handleBasket()}>
          <img src={require('./basket-icon.svg').default} alt="" className="header__nav-icon" />
          <p className="header__nav-text">Корзина</p>
        </div>
      </nav>

      </div>
      <Basket handleBasket={handleBasket}/>
    </header>

  );
}