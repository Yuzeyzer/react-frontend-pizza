import React from 'react';
import Sizes from './sizes';
import { Formik, Field, Form } from 'formik';
import './style.scss';
import Types from './types';
import Prices from './prices';

const AddNewPizza = () => {
  const [pizza, setPizza] = React.useState({});

  return (
    <div className='add-pizza'>
      <h3 className='add-pizza__title'>Добавление новой пиццы</h3>
      <h5 className='add-pizza__subtitle'>Выберите параметры</h5>
      <Formik
        initialValues={{
          name: '',
          imageUrl: '',
          sizes: [],
          types: [],
          price: [],
        }}
        onSubmit={(values) => {
          const sizes = values.sizes.map((item) => +item);
          const price = values.price.map((item) => +item);
          const types = values.types.map((item) => +item);

          setPizza((prev) => ({ ...prev, ...values, sizes, price, types }));

          console.log(pizza);
        }}>
        {({ values }) => (
          <Form>
            <div className='form__row'>
              <label className='form-item'>
                <span className='form-item__legend'>Название</span>
                <Field className='form-item__input' name='name' type='text' />
              </label>
              <label className='form-item'>
                <span className='form-item__legend'>Путь к картинке</span>
                <Field className='form-item__input' name='imageUrl' type='text' />
              </label>
            </div>
            <div className='form__row'>
              <Sizes values={values} />
              <Types />
            </div>
            <div className='form__row'>
              <Prices />
            </div>
            <div className='add-pizza__bottom'>
              <p className='add-pizza__info'>Не забудьте указать цену для разных резмеров пиццы*</p>
              <button>Далее</button>
            </div>
          </Form>
        )}
      </Formik>
      <div className='form'></div>
    </div>
  );
};

export default AddNewPizza;
