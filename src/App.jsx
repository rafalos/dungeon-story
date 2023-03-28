import Sidebar from './components/Layout/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div id='sidebar'>
        <Sidebar />
      </div>
      <div id='game-wrapper'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
