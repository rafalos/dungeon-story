import React from 'react'

function BattleLog({log}) {
  console.log(log)
  return (
    <ul>
      {log.map(logEntry => <li>{logEntry}</li>)}
    </ul>
  )
}

export default BattleLog
