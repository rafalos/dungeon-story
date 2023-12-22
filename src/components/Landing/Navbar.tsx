import React from 'react';
import Authentication from './Authentication';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-4 p-4 text-customWhite/60">
      <div className="cursor-pointer text-3xl md:hidden">
        <GiHamburgerMenu />
      </div>
      <div className="text-lg  md:text-2xl">Dungeon Story</div>
      <nav>
        <ul className="hidden gap-8 text-lg md:flex">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#features">
            <li>Features</li>
          </a>
          <a href="#journey">
            <li>Journey</li>
          </a>
        </ul>
      </nav>
      <Authentication />
    </header>
  );
};

export default Navbar;
