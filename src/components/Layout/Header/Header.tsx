import Status from '../Sidebar/Status';

const Header = () => {
  return (
    <header className="fixed flex h-[60px] w-full gap-4 items-center justify-between bg-customBlack p-4 text-lg font-bold text-customWhite">
      <div className='md:flex-1'>DungeonStory</div>
      <div className='flex-1 md:flex-0'>
        <Status />
      </div>
    </header>
  );
};

export default Header;
