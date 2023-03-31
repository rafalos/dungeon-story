import React from 'react'

function BattleLog({log}) {
  return (
    <ul>
      {log.map(logEntry => <li key={logEntry}>{logEntry}</li>)}
    </ul>
  )
}

export default BattleLog
