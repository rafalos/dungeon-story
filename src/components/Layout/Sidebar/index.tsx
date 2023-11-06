import Button from '@/components/UI/Button';
import Navigation from './Navigation';
import Status from './Status';

function Sidebar() {
  return (
    <div className='p-4 flex flex-col gap-1 font-medium bg-slate-800 text-white border-r'>
      <Status />
      <Navigation />
    </div>
  );
}

export default Sidebar;
