import { useSelector } from 'react-redux';
import Battle from './components/Battle/Battle';
import ResourceBar from './components/UI/ResourceBar';

function App() {
  const player = useSelector((state) => state.player);

  return (
    <div className='App'>
      <h1>{player.name}</h1>
      <h2>{player.level}</h2>
      <ResourceBar currentResource={player.experience} maxResource={200} />
      <Battle />
    </div>
  );
}

export default App;
