import React from 'react';
import { observer } from 'mobx-react';
import { navigation } from '../../routes/navigation';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
  return (
    <ul>
      {navigation.map((item, idx) => {
        return (
          <Link to={item.url} key={idx}>
            <li>{item.title}</li>
          </Link>
        );
      })}
    </ul>
  );
});
export default NavBar;
