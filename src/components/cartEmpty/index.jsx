import React from 'react';
import emptyCartImage from '../../assets/empty-cart.png';

const CartEmpty = () => {
  return (
    <div class='cart cart--empty'>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartImage} alt='Empty cart' />
      <a href='/' class='button button--black'>
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default CartEmpty;
