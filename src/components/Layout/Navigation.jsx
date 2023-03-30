import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../UI/Card';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <Card>
      <nav className={classes['navigation_list']}>
        <NavLink
          className={({ isActive }) =>
            [
              classes['nav-link'],
              isActive ? classes['nav-link--active'] : undefined,
            ].join(' ')
          }
          to={`battle`}
        >
          Battle
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            [
              classes['nav-link'],
              isActive ? classes['nav-link--active'] : undefined,
            ].join(' ')
          }
          to={`inventory`}
        >
          Inventory
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            [
              classes['nav-link'],
              isActive ? classes['nav-link--active'] : undefined,
            ].join(' ')
          }
          to={`shop`}
        >
          Shop
          
        </NavLink>
      </nav>
    </Card>
  );
}

export default Navigation;
