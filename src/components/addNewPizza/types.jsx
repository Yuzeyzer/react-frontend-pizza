import React from 'react';
import { Field } from 'formik';
import './style.scss';

const Types = () => {
  return (
    <div className='form-item types'>
      <h6 className='form-item__legend'>Типы</h6>
      <Field className='sizes__checkbox' id='traditional' type='checkbox' name='types' value='0' />
      <label htmlFor='traditional'>
        <span className='sizes__text'>Традиционное</span>
      </label>
      <Field className='sizes__checkbox' id='thin' type='checkbox' name='types' value='1' />
      <label htmlFor='thin'>
        <span className='sizes__text'>Тонкое</span>
      </label>
    </div>
  );
};

export default Types;
