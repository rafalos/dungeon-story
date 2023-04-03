import React from 'react';

function ExplorationSummary({ story, onFinished }) {
  return (
    <div>
      <div>{story}</div>
      <div>
        During your expedition you have gained 5000 total experience and found
        items:
      </div>
      <button onClick={onFinished}>Leave exploration</button>
    </div>
  );
}

export default ExplorationSummary;
