import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { GiBlackKnightHelm } from 'react-icons/gi';
import { GiDungeonGate } from 'react-icons/gi';
import { GiShop } from 'react-icons/gi';
import { IoLogOutOutline } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';

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
    {
      label: 'Stories',
      to: 'stories',
      icon: GiBookshelf,
    },
  ];

  return (
    <div className="fixed bottom-0 z-50 h-14 w-full bg-customBlack text-3xl text-customWhite">
      <nav className="flex items-center justify-between">
        {navLinks.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              [
                'flex w-full justify-center p-4 tracking-wide transition-colors hover:bg-customRed/80',
                isActive ? 'bg-customRed' : undefined,
              ].join(' ')
            }
            to={to}
          >
            <span>
              <Icon />
            </span>
            <span className="hidden">{label.toUpperCase()}</span>
          </NavLink>
        ))}
        <li
          className="flex w-full justify-center p-4 tracking-wide transition-colors hover:bg-customRed/40"
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          <IoLogOutOutline />
          <span className="hidden">Logout</span>
        </li>
      </nav>
    </div>
  );
}

export default Navigation;
