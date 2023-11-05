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
  eventString,
  onEventProgress,
  currentStory,
  onItemFound,
  onExperienceGained,
  onPlayerDeath,
  chapterLoading,
}) {
  const [eventInProgress, setEventInProgress] = useState(false);
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

  const endEventHandler = () => {
    setEventInProgress(false);
  };

  return (
    <div className={classes['exploration-wrapper']}>
      {eventInProgress && currentEvent()}
      {!eventInProgress && chapterLoading && <Loader />}
      {!eventInProgress && !chapterLoading && currentStory}
      {!eventInProgress && (
        <Button onClick={progressEventHandler} disabled={chapterLoading}>
          Continue exploration
        </Button>
      )}
    </div>
  );
}

export default ExplorationEvent;
