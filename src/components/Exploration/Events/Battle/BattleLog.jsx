import React from 'react'

function BattleLog({log}) {
  return (
    <ul>
      {log.map(logEntry => <li key={logEntry.id}>{logEntry.entry}</li>)}
    </ul>
  )
}

export default BattleLog
