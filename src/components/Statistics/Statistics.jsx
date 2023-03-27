import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { playerStatusActions } from '../../store/player-status-slice';

function Statistics() {
  const dispatch = useDispatch();
  const playerStatistics = useSelector((state) => state.statistics);
  const { statPoints } = useSelector((state) => state.status);
  let statistics = [];

  for (const statisticEntry in playerStatistics.attributes) {
    statistics.push([
      statisticEntry,
      playerStatistics.attributes[statisticEntry],
    ]);
  }

  const increaseStatHandler = (statistic) => {
    dispatch(
      playerStatisticActions.increaseStat({
        statistic: statistic,
        amount: 1,
      })
    );
    dispatch(playerStatusActions.useStatpoint());
  };

  return (
    <Card>
      <ul>
        <li>
          Damage: {playerStatistics.minDamage} - {playerStatistics.maxDamage}
        </li>
        <li>Health points: {playerStatistics.maxHealth}</li>
        <li>Defence: {playerStatistics.defence}</li>
        <li>Critical chance: {playerStatistics.critChance} %</li>
        <li>Dodge chance: {playerStatistics.dodgeChance} %</li>
        <br></br>
        <li>{`Stat points: ${statPoints}`}</li>
        {statistics.map((statisticEntry) => (
          <li>
            {`${statisticEntry[0]}: ${statisticEntry[1]}`}
            {statPoints > 0 && (
              <button onClick={() => increaseStatHandler(statisticEntry[0])}>
                +
              </button>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Statistics;
