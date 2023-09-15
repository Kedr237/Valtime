import './header.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (

    <header className="header">
      <div className="wrapper header__wrapper">

        <p className="header__city">Доставка из Санкт-Петербурга</p>
        <img src={require('./logo.svg').default} alt="Logo" className="header__logo" onClick={goHome} />

        <nav className="header__nav">
        <div className="header__nav-item">
          <img src={require('./user-icon.svg').default} alt="" className="header__nav-icon" />
          <p className="header__nav-text">Вход</p>
        </div>
        <div className="header__nav-item">
          <img src={require('./backet-icon.svg').default} alt="" className="header__nav-icon" />
          <p className="header__nav-text">Корзина</p>
        </div>
      </nav>

      </div>
    </header>

  );
}