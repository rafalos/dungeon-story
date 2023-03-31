import React, { useState } from 'react';
import Battle from './Events/Battle/Battle';

function ExplorationEvent({ eventId, onEventProgress }) {
  const [eventInProgress, setEventInProgress] = useState(true);

  const currentEvent = () => {
    let cEvent = null;
    switch (eventId) {
      case 1:
        cEvent = <Battle onEventFinished={endEventHandler} />;
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
    <div>
      {eventInProgress && currentEvent()}
      {!eventInProgress && (
        <button onClick={progressEventHandler}>Explore further</button>
      )}
    </div>
  );
}

export default ExplorationEvent;
