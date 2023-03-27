import React from 'react'

function BattleLog({log}) {
  return (
    <ul>
      {log.map(logEntry => <li>{logEntry}</li>)}
    </ul>
  )
}

export default BattleLog
