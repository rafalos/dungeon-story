import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <div className='bg-zinc-800 text-white'>
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
          to={`exploration`}
        >
          Exploration
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
    </div>
  );
}

export default Navigation;
