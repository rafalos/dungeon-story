import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';
import Trap from './Events/Trap/Trap';
import classes from './ExplorationEvent.module.css';

function ExplorationEvent({
  eventId,
  onEventProgress,
  currentStory,
}) {
  const [eventInProgress, setEventInProgress] = useState(false);
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
      {!eventInProgress && currentStory}
      {!eventInProgress && (
        <button onClick={progressEventHandler}>Proceed</button>
      )}
    </div>
  );
}

export default ExplorationEvent;
