import { useState } from 'react';
import Trap from './Events/Trap/Trap';
import Treasure from './Events/Treasure/Treasure';
import Well from './Events/Well/Well';
import { EVENTS } from '../../utils/contants';
import Button from '../UI/Button';
import Typer from '../UI/Typer';
import Card from '../UI/Card';
import { Equipment } from '@/types';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

type Props = {
  fetchNextStory: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<unknown, Error>>;
  eventString: string;
  eventCount: number;
  currentPosition: number;
  onEventProgress: () => void;
  currentStory: string;
  onItemFound: (items: Equipment[]) => void;
  onExperienceGained: (amount: number) => void;
};

function ExplorationEvent({
  fetchNextStory,
  eventString,
  eventCount,
  currentPosition,
  onEventProgress,
  currentStory,
  onExperienceGained,
}: Props) {
  const [eventInProgress, setEventInProgress] = useState(false);
  const explorationFinished = currentPosition === eventCount - 1;

  const currentEvent = () => {
    let cEvent = null;
    switch (eventString) {
      case EVENTS.BATTLE:
        // cEvent = (
        //   <Battle
        //     onEventFinished={endEventHandler}
        //     onPlayerDeath={onPlayerDeath}
        //     onItemFound={onItemFound}
        //     onExperienceGained={onExperienceGained}
        //   />
        // );
        cEvent = null;
        break;
      case EVENTS.TRAP:
        cEvent = <Trap onEventFinished={endEventHandler} />;
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
    <Card>
      {eventInProgress && (
        <div className="flex flex-col gap-4 text-lg">{currentEvent()}</div>
      )}
      {!eventInProgress && (
        <>
          <div className="p-2 font-openSans text-sm italic md:p-4 md:text-lg">
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
        </>
      )}
    </Card>
  );
}

export default ExplorationEvent;
