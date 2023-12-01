import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';
import Trap from './Events/Trap/Trap';
import Treasure from './Events/Treasure/Treasure';
import classes from './ExplorationEvent.module.css';
import Well from './Events/Well/Well';
import { EVENTS } from '../../utils/contants';
import Loader from '../UI/Loader';
import Button from '../UI/Button';

function ExplorationEvent({
  fetchNextStory,
  eventString,
  onEventProgress,
  currentStory,
  onItemFound,
  onExperienceGained,
  onPlayerDeath,
}) {
  const [eventInProgress, setEventInProgress] = useState(false);
  console.log(`############## ${eventString}`)

  const currentEvent = () => {
    let cEvent = null;
    switch (eventString) {
      case EVENTS.BATTLE:
        cEvent = (
          <Battle
            onEventFinished={endEventHandler}
            onPlayerDeath={onPlayerDeath}
            onItemFound={onItemFound}
            onExperienceGained={onExperienceGained}
          />
        );
        break;
      case EVENTS.TRAP:
        cEvent = (
          <Trap
            onEventFinished={endEventHandler}
            onPlayerDeath={onPlayerDeath}
          />
        );
        break;
      case EVENTS.WELL:
        cEvent = (
          <Well
            onExperienceGained={onExperienceGained}
            onEventFinished={endEventHandler}
          />
        );
        break;
      case EVENTS.TREASURE:
        cEvent = (
          <Treasure
            onExperienceGained={onExperienceGained}
            onEventFinished={endEventHandler}
          />
        );
    }
    return cEvent;
  };

  const progressEventHandler = () => {
    onEventProgress();
    setEventInProgress(true);
  };

  const endEventHandler = async () => {
    await fetchNextStory();
    setEventInProgress(false);
  };

  return (
    <div className={classes['exploration-wrapper']}>
      {eventInProgress && currentEvent()}
      {!eventInProgress && currentStory}
      {!eventInProgress && (
        <Button onClick={progressEventHandler}>Continue exploration</Button>
      )}
    </div>
  );
}

export default ExplorationEvent;
