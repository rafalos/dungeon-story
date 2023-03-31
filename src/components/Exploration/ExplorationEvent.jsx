import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';
import Trap from './Events/Trap/Trap';
import classes from './ExplorationEvent.module.css';
import { useGpt } from '../../hooks/useGpt';

function ExplorationEvent({ eventId, onEventProgress, currentPosition }) {
  const [eventInProgress, setEventInProgress] = useState(false);
  const entryText = useGpt('Give me very short roguelike entry dungeon text');

  const currentEvent = () => {
    let cEvent = null;
    switch (eventId) {
      case 1:
        cEvent = <Battle onEventFinished={endEventHandler} />;
        break;
      case 2:
        cEvent = <Trap onEventFinished={endEventHandler} />;
        break;
    }
    return cEvent;
  };

  const progressEventHandler = () => {
    onEventProgress();
    setEventInProgress(true);
  };

  const endEventHandler = () => {
    setEventInProgress(false);
  };

  return (
    <div className={classes['exploration-wrapper']}>
      {eventInProgress && currentEvent()}
      {!eventInProgress && currentPosition < 0 && entryText && (
        <div>{entryText}</div>
      )}
      {!eventInProgress && (
        <button disabled={!entryText} onClick={progressEventHandler}>
          {entryText ? 'Proceed' : 'Loading'}
        </button>
      )}
    </div>
  );
}

export default ExplorationEvent;
