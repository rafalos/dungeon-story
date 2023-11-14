import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { useAuth0 } from '@auth0/auth0-react';

function Navigation() {
  const { logout } = useAuth0();

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

        <li
          className={classes['nav-link']}
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          Logout
        </li>
      </nav>
    </div>
  );
}

export default Navigation;
