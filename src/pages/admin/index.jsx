import React from 'react';
import { boxes } from './const';
import './style.scss';
const Admin = () => {
  return (
    <div className='admin'>
      <h3 className='admin__title'>Добавить новый продукт</h3>
      <h5 className='admin__subtitle'>Выберите тип продукта</h5>
      <div className='admin__content'>
        {boxes.map((item) => {
          return (
            <div className='admin__box'>
              {item.svg()}
              <h5 className="box__title">{item.title}</h5>
            </div>
          );
        })}
      </div>
      <div className='admin_bottom'>
        <p className='admin__description'>
          В данном блоке вы определяете тип добавляемого продукта, в следующем блоке вы будете
          выбирать его параметры*
        </p>
        <button className='admin__button'>Далее</button>
      </div>
    </div>
  );
};

export default Admin;
