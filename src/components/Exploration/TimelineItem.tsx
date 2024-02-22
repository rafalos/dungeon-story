import React from 'react';

type Props = {
  isActive?: boolean;
  event: string;
};

function TimelineItem({ isActive, event }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-customBlack p-2 ${
        isActive ? 'border-2 border-customYellow' : ''
      }`}
    >
      {event}
    </div>
  );
}

export default TimelineItem;
