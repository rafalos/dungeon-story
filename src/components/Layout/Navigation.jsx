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
          to={`character`}
        >
          Character
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

        <NavLink
          className={({ isActive }) =>
            [
              classes['nav-link'],
              isActive ? classes['nav-link--active'] : undefined,
            ].join(' ')
          }
          to={`exploration`}
        >
          Exploration
        </NavLink>
      </nav>
    </Card>
  );
}

export default Navigation;
