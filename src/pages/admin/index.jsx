import React from 'react';
import { CreateNewPizza } from '../../redux/actions/pizzas';

const Admin = () => {
  const [pizza, setPizza] = React.useState({
    imageUrl: '',
    name: '',
    types: [],
    sizes: [],
    price: [],
    category: 0,
    rating: 0,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    CreateNewPizza(pizza);
  };

  const handleOnChangeinput = (event) => {
    setPizza((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleOnChangeinput}
          value={pizza.name}
          name='name'
          type='text'
          placeholder='Добавить имя пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.imageUrl}
          name='imageUrl'
          type='text'
          placeholder='Добавить картинку пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.price}
          name='price'
          type='number'
          placeholder='Добавить Цену пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.types}
          name='types'
          type='text'
          placeholder='Добавить Тип пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.sizes}
          name='sizes'
          type='text'
          placeholder='Добавить Размер пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.category}
          name='category'
          type='text'
          placeholder='Добавить Категорию пиццы'
        />
        <input
          onChange={handleOnChangeinput}
          value={pizza.rating}
          name='rating'
          type='text'
          placeholder='Добавить Рейтинг пиццы'
        />
        <button type='submit'>Отправить</button>
      </form>
    </div>
  );
};

export default Admin;
