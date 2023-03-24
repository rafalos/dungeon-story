import { useSelector, useDispatch } from 'react-redux';
import ResourceBar from './components/UI/ResourceBar';
import { playerStatusActions } from './store';

function App() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleTakeDamage = () => {
    dispatch(
      playerStatusActions.takeDamage({
        amount: 10,
      })
    );
  };

  return (
    <div className='App'>
      <ResourceBar currentResource={player.currentHealth} maxResource={player.health} />
      <h1>{player.name}</h1>
      <button onClick={handleTakeDamage}>Take damage</button>
    </div>
  );
}

export default App;
