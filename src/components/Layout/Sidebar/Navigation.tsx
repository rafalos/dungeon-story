import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { GiBlackKnightHelm } from 'react-icons/gi';
import { GiDungeonGate } from 'react-icons/gi';
import { GiShop } from 'react-icons/gi';
import { IoLogOutOutline } from 'react-icons/io5';

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
    <div className="flex h-full flex-col justify-between text-customWhite">
      <nav className="flex flex-col">
        {navLinks.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              [
                'flex items-center gap-2 p-4 text-xl font-medium transition-colors hover:bg-customWhite hover:bg-opacity-5',
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
        className="flex items-center gap-2 p-4 text-2xl font-medium transition-colors hover:bg-customWhite hover:bg-opacity-5"
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
