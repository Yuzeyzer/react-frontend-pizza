import React from 'react';

const Prices = () => {
  return (
    <div className='form-item prices'>
      <h6 className='form-item__legend'>Цены</h6>
      <div className="prices__row">
        <label className='prices__label col-6'>
          <div className='prices__size'>26</div>
          <input type='number' min='1' max='3' maxlength='3' placeholder='345' />
          <span className='prices__prefix'>сом</span>
        </label>
        <label className='prices__label col-6'>
          <span className='prices__size'>30</span>
          <input type='number' min='1' max='3' maxlength='3' placeholder='455' />
          <span className='prices__prefix'>сом</span>
        </label>
        <label className='prices__label col-6'>
          <span className='prices__size'>40</span>
          <input type='number' min='1' max='3' maxlength='3' placeholder='620' />
          <span className='prices__prefix'>сом</span>
        </label>
      </div>
    </div>
  );
};

export default Prices;
