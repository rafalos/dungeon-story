import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { GiBlackKnightHelm } from 'react-icons/gi';
import { GiDungeonGate } from 'react-icons/gi';
import { GiShop } from 'react-icons/gi';
import { IoLogOutOutline } from 'react-icons/io5';
import { GiBookshelf } from 'react-icons/gi';
import Status from './Status';

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
    <div className="fixed bottom-0 z-50 flex h-12 w-full flex-col gap-4 bg-customBlack text-2xl text-customWhite md:static md:h-full md:w-[300px] md:border-r md:border-r-customCaramel/10 md:text-lg">
      <div className="hidden md:block md:p-4">
        <Status />
      </div>
      <nav className="flex items-center justify-between md:flex-col">
        {navLinks.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              [
                'flex w-full items-center justify-center p-4 tracking-wide transition-colors hover:bg-customCaramel md:justify-start md:gap-4',
                isActive ? 'bg-customCaramel' : undefined,
              ].join(' ')
            }
            to={to}
          >
            <span className="md:text-2xl">
              <Icon />
            </span>
            <span className="hidden md:block">{label.toUpperCase()}</span>
          </NavLink>
        ))}
      </nav>
      {/* <div className="flex items-center justify-center">
        <IoLogOutOutline />
        <span className="hidden">Logout</span>
      </div> */}
    </div>
  );
}

export default Navigation;
