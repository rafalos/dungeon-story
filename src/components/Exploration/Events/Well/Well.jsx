import React from 'react'

function Well({onEventFinished}) {
  return (
    <div>Well
      <button onClick={onEventFinished}>Proceed</button>
    </div>
  )
}

export default Well
