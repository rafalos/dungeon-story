import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex text-customWhite h-20 items-center justify-between text-lg font-bold p-4 border-customWhite border-b border-opacity-10'>
      <div>Dungeon Story</div>
      <div>Alpha Version</div>
    </header>
  )
}

export default Header
