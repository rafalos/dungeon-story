import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';
import Trap from './Events/Trap/Trap';
import Treasure from './Events/Treasure/Treasure';
import classes from './ExplorationEvent.module.css';
import Well from './Events/Well/Well';
import { EVENTS } from '../../utils/contants';

function ExplorationEvent({
  eventString,
  onEventProgress,
  currentStory,
  onItemFound,
  onExperienceGained
}) {
  const [eventInProgress, setEventInProgress] = useState(false);
  const currentEvent = () => {
    let cEvent = null;
    switch (eventString) {
      case EVENTS.BATTLE:
        cEvent = <Battle onEventFinished={endEventHandler} onItemFound={onItemFound} onExperienceGained={onExperienceGained}/>;
        break;
      case EVENTS.TRAP:
        cEvent = <Trap onEventFinished={endEventHandler} />;
        break;
      case EVENTS.WELL:
        cEvent = <Well onExperienceGained={onExperienceGained} onEventFinished={endEventHandler}/>
        break;
      case EVENTS.TREASURE:
        cEvent = <Treasure onExperienceGained={onExperienceGained} onEventFinished={endEventHandler}/>
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
        <button onClick={progressEventHandler}>Continue exploration</button>
      )}
    </div>
  );
}

export default ExplorationEvent;
