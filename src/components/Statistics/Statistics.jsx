import React from 'react'
import { useSelector } from 'react-redux'

function Statistics() {
  const playerStatistics = useSelector(state => state.statistics)

  console.log(playerStatistics)
  return (
    <Card>Statistics</Card>
  )
}

export default Statistics
