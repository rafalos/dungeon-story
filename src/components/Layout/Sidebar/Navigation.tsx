import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { GiBlackKnightHelm } from 'react-icons/gi';
import { GiDungeonGate } from 'react-icons/gi';
import { GiShop } from 'react-icons/gi';
import { IoLogOutOutline } from "react-icons/io5";

function Navigation() {
  const { logout } = useAuth0();
  const navLinks = [
    {
      label: 'Character',
      to: 'character',
      icon: GiBlackKnightHelm,
    },
    { label: 'Exploration', to: 'exploration', icon: GiDungeonGate },
    {
      label: 'Shop',
      to: 'shop',
      icon: GiShop,
    },
  ];

  return (
    <div className='text-customWhite flex flex-col justify-between h-full'>
      <nav className='flex flex-col'>
        {navLinks.map(({ label, to, icon: Icon }) => (
          <NavLink
            className={({ isActive }) =>
              [
                'p-4 hover:bg-customWhite hover:bg-opacity-5 transition-colors flex items-center gap-2 text-xl font-medium',
                isActive ? 'bg-customWhite bg-opacity-10' : undefined,
              ].join(' ')
            }
            to={to}
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </nav>
      <li
          className='p-4 hover:bg-customWhite hover:bg-opacity-5 transition-colors flex items-center gap-2 text-2xl font-medium'
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          <IoLogOutOutline />
          Logout
        </li>
    </div>
  );
}

export default Navigation;
