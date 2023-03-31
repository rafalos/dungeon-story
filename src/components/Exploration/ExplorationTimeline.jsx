import React from 'react';
import TimelineItem from './TimelineItem';
import classes from './ExplorationTimeline.module.css';

function ExplorationTimeline({ currentPosition, seed }) {
  return (
    <div className={classes.timeline}>
      {seed.map((eventId, index) => {
        if (index === currentPosition) {
          return (
            <TimelineItem
              className={`${classes['timeline-item--active']} ${classes['timeline-item']}`}
              isActive={true}
            />
          );
        } else {
          return <TimelineItem className={classes['timeline-item']} />;
        }
      })}
    </div>
  );
}

export default ExplorationTimeline;
