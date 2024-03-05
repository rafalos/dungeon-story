import { useState } from 'react';
import Trap from './Events/Trap/Trap';
import Treasure from './Events/Treasure/Treasure';
import Well from './Events/Well/Well';
import { EVENTS } from '../../utils/contants';
import Button from '../UI/Button';
import Typer from '../UI/Typer';
import Card from '../UI/Card';
import { Equipment, MoveState } from '@/types';
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
  result: MoveState;
};

function ExplorationEvent({
  fetchNextStory,
  eventString,
  eventCount,
  currentPosition,
  onEventProgress,
  currentStory,
  onExperienceGained,
  result,
}: Props) {
  const [eventInProgress, setEventInProgress] = useState(false);
  const explorationFinished = currentPosition === eventCount - 1;

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

  const currentEvent = (eventResult: MoveState) => {
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
        cEvent = (
          <Trap onEventFinished={endEventHandler} result={eventResult} />
        );
        break;
      case EVENTS.WELL:
        cEvent = (
          <Well
            result={eventResult}
            onExperienceGained={onExperienceGained}
            onEventFinished={endEventHandler}
          />
        );
        break;
      case EVENTS.TREASURE:
        cEvent = (
          <Treasure result={eventResult} onEventFinished={endEventHandler} />
        );
    }
    return cEvent;
  };

  return (
    <Card>
      {eventInProgress && (
        <div className="flex flex-col gap-4 text-lg">
          {currentEvent(result)}
        </div>
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
