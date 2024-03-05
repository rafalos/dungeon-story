import Status from '../Sidebar/Status';

const Header = () => {
  return (
    <header className="fixed flex h-[60px] w-full items-center justify-between gap-4 bg-customBlack p-4 font-bold text-customWhite md:static md:border-b md:border-b-customCaramel/10">
      <div className="text-2xl md:flex-1">
        <span className="text-customCaramel">D</span>ungeon
        <span className="text-cust">S</span>tory
      </div>
      <div className="md:flex-0 flex-1 md:hidden">
        <Status />
      </div>
    </header>
  );
};

export default Header;
