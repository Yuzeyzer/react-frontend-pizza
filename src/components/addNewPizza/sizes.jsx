import React from 'react';
import { Field } from 'formik';
import './style.scss';

const Sizes = () => {
  return (
    <div className='form-item sizes'>
      <h6 className='form-item__legend'>Размеры</h6>
      <div role='group' aria-labelledby='checkbox-group'>
        <Field className='sizes__checkbox' id='26см' type='checkbox' name='sizes' value='26' />
        <label htmlFor='26см'>
          <span className='sizes__text'>26 см</span>
        </label>
        <Field className='sizes__checkbox' id='30см' type='checkbox' name='sizes' value='30' />
        <label htmlFor='30см'>
          <span className='sizes__text'>30 см</span>
        </label>
        <Field className='sizes__checkbox' id='40см' type='checkbox' name='sizes' value='40' />
        <label htmlFor='40см'>
          <span className='sizes__text'>40 см</span>
        </label>
      </div>
    </div>
  );
};

export default Sizes;
