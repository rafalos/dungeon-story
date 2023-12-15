import Navigation from './Navigation';
import Status from './Status';

function Sidebar() {
  return (
    <div className="flex flex-col gap-2 p-4 text-customWhite">
      <Status />
      <Navigation />
    </div>
  );
}

export default Sidebar;
