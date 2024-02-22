import Status from '../Sidebar/Status';

const Header = () => {
  return (
    <header className="fixed flex h-[60px] w-full gap-4 items-center justify-between bg-customBlack p-4 text-lg font-bold text-customWhite">
      <div>DungeonStory</div>
      <div className='flex-1'>
        <Status />
      </div>
    </header>
  );
};

export default Header;
