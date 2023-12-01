import React from 'react';
import Authentication from '../UI/Authentication';
import { GiHamburgerMenu } from 'react-icons/gi';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className='text-[#fff8f0] flex h-16 justify-between items-center w-full gap-4 p-4'>
      <div className='md:hidden text-3xl cursor-pointer'>
        <GiHamburgerMenu />
      </div>
      <div className='text-[16px] md:text-2xl'>Dungeon Story</div>
      <nav>
        <ul className='hidden md:flex gap-8 text-lg'>
          <li>About</li>
          <li>Features</li>
          <li>Test</li>
        </ul>
      </nav>
      <Authentication />
    </header>
  );
};

export default Navbar;
