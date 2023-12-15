import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-customWhite border-opacity-10 p-4 text-lg font-bold text-customWhite">
      <div>Dungeon Story</div>
      <div>Alpha Version</div>
    </header>
  );
};

export default Header;
