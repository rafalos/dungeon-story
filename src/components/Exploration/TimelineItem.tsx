import React from 'react';

type Props = {
  isActive?: boolean;
  event: string;
};

function TimelineItem({ isActive, event }: Props) {
  return (
    <div
      className={`flex h-24 w-24 items-center justify-center bg-customBlack ${
        isActive ? 'border-2 border-customYellow' : ''
      }`}
    >
      {event}
    </div>
  );
}

export default TimelineItem;
