import React from 'react';
import Categories from '../../components/category';
import Sort from '../../components/sort';
import PizzaBlock from '../../components/pizzaBlock';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/database.json');
    setPizzas(response.data.pizzas);
  };

  const categoryItem = useSelector((state) => state.filters.category);

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {pizzas
            .filter((pizza) => {
              if (categoryItem == null) {
                return pizza;
              }
              if (pizza.category === categoryItem) {
                return pizza;
              }
            })
            .map((pizza) => {
              return <PizzaBlock pizza={pizza} key={pizza.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
