import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { setBasket } from '../../../../store/slices/basketSlice';
import './basket.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { ORDERS_URL } from '../../../../helpers/CONSTS';
import { useNavigate } from 'react-router-dom';


export default function Basket(props: any) {

  const basket = useAppSelector(state => state.basket.arr)
  const watches = useAppSelector(state => state.watches.arr.map(watch => ({
    id: watch.id,
    name: watch.name,
    price: watch.price,
  })));

  const dispatch = useAppDispatch();
  function handleBasket(id:number) {
    if (basket.includes(id)) {
      dispatch(setBasket(basket.filter(el => el != id)));
      
    } else {
      dispatch(setBasket([...basket, id]));
    }
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  function sendOrder(e: React.MouseEvent<HTMLFormElement>) {
    const data = {
      name,
      phone,
      address,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    axios.post(ORDERS_URL, data, config)
      .then(response => console.log('Заказ успешно отправлен'))
      .catch(response => 'Ошибка: ' + response);
    setName('');
    setPhone('');
    setAddress('');
    alert('Ваш заказ успешно отправлен')
  }

  const navigate = useNavigate();
  function goWatch(id: number) {
    navigate('watch/' + String(id));
  }


  return (
    <div className="basket">
      <img src={require('./b-arrow.svg').default} alt="" className="basket__arr" onClick={() => props.handleBasket()} />
      <ul className="basket__products">
        {watches.filter(watch => basket.includes(watch.id)).map(watch => 
          <li className='basket__prod' key={watch.id}>
            <img src={require('./cross.svg').default} alt="" className='basket__cross' onClick={() => handleBasket(watch.id)} />
            <div onClick={() => goWatch(watch.id)}>
            <p className="basket__name">{watch.name}</p>
            <p className="basket__price">{watch.price}</p>
            <p className="basket__underline"></p>
            </div>
        </li>
        )}
      </ul>

      <form action="" className="basket__form" onSubmit={sendOrder}>
        <p className="basket__label">Ваше имя</p>
        <input type="text" name='name' className="basket__input" onChange={e => setName(e.target.value)} maxLength={100} value={name} required />
        <p className="basket__label">Ваш номер телефона</p>
        <input type="text" name='phone' className="basket__input" onChange={e => setPhone(e.target.value)} minLength={11} maxLength={30} value={phone} required />
        <p className="basket__label">Ваш адрес</p>
        <input type="text" name='address' className="basket__input" onChange={e => setAddress(e.target.value)} minLength={10} maxLength={150} value={address} required />
        <button className="basket__button" type='submit'>Отправить заявку</button>
      </form>
    </div>
  );
}
