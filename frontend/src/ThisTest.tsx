import React from 'react';

export default function ThisTest() {

  const styles: React.CSSProperties = {
    textAlign: 'center',
    color: 'green',
    textShadow: '0 0 0.2rem red',
    fontSize: '1.2rem',
    maxWidth: '700px',
    fontWeight: '600',
    margin: '0px auto 2rem',
  }


  return (
    <div className="this-test" style={styles}>
      Этот сайт был создан для портфолио. Все данные на нём фиктивны. Проект выполнен с использованием React + Django. Весь контент добавляется через админ-панель Django.
    </div>
  )
}