import Navigation from './Navigation';
import Status from './Status';

function Sidebar() {
  return (
    <div className='p-4 flex flex-col gap-2 text-customWhite'>
      <Status />
      <Navigation />
    </div>
  );
}

export default Sidebar;
