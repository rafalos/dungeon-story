import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';
import Trap from './Events/Trap/Trap';
import Treasure from './Events/Treasure/Treasure';
import classes from './ExplorationEvent.module.css';
import Well from './Events/Well/Well';
import { EVENTS } from '../../utils/contants';
import Loader from '../UI/Loader';
import Button from '../UI/Button';
import Typer from '../UI/Typer';

function ExplorationEvent({
  fetchNextStory,
  eventString,
  eventCount,
  currentPosition,
  onEventProgress,
  currentStory,
  onItemFound,
  onExperienceGained,
  onPlayerDeath,
}) {
  const [eventInProgress, setEventInProgress] = useState(false);
  const explorationFinished = currentPosition === eventCount - 1;

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

  const progressEventHandler = async () => {
    await onEventProgress();
    setEventInProgress(true);
  };

  const endEventHandler = async () => {
    await fetchNextStory();
    setEventInProgress(false);
  };

  const finishedExplorationHandler = async () => {
    await onEventProgress();
    await fetchNextStory();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {eventInProgress && (
        <div className=" flex flex-col gap-4 text-lg">{currentEvent()}</div>
      )}
      {!eventInProgress && (
        <div className="flex w-full flex-col bg-transparent">
          <div className=" p-4 text-2xl font-thin italic">
            <Typer delay={20} text={currentStory} />
          </div>
          <div className="flex w-full justify-center">
            {!explorationFinished && (
              <Button onClick={progressEventHandler}>
                Continue exploration
              </Button>
            )}
            {explorationFinished && (
              <Button onClick={finishedExplorationHandler}>Leave</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExplorationEvent;
