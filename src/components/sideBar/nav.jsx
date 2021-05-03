import React from 'react';
import { sidebarItems } from './const';
const Nav = () => {
  const [active, setActive] = React.useState(0);
  return (
    <ul>
      {sidebarItems.map((item, index) => {
        return (
          <li
            onClick={() => setActive(index)}
            className={`aside__box ${active === index ? 'is-active' : ''}`}>
            <a href=''>{item.title}</a>
            {item.svg()}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
