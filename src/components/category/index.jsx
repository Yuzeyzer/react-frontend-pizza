import React from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import { useDispatch } from 'react-redux';
import { category } from '../../redux/actions/filter';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = React.useState(null);

  const selectItemOnClick = (i) => {
    setActive(i);
    dispatch(category(i));
  };

  const selectAllCategory = () => {
    setActive(null);
    dispatch(category(null));
  };
  return (
    <div className='categories'>
      <ul>
        <li onClick={selectAllCategory} className={active === null ? 'active' : ''}>
          Все
        </li>
        {categoriesItems.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => selectItemOnClick(index)}
              className={active === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
