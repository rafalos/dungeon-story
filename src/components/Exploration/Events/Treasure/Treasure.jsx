import React from 'react'

function Treasure({onEventFinished}) {
  return (
    <div>Treasure
      <button onClick={onEventFinished}>Proceed</button>
  </div>
  )
}

export default Treasure
