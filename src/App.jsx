import Battle from './components/Battle/Battle';
import Header from './components/Layout/Header';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className='App'>
      <div id='sidebar'>
        <Header />
      </div>
      <div id='game-wrapper'>
        <Battle />
        <Inventory />
      </div>
    </div>
  );
}

export default App;
