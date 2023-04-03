import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { playerStatusActions } from '../../store/player-status-slice';
import classes from './Statistics.module.css';

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
      playerStatisticActions.changeStatistic({
        statistics: [[statistic, 1]],
      })
    );
    dispatch(playerStatusActions.useStatpoint());
  };

  return (
    <>
      <ul className={classes.statistics}>
        <li>
          Damage: {playerStatistics.minDamage} - {playerStatistics.maxDamage}
        </li>
        <li>
          Health points: {playerStatistics.currentHealth} /{' '}
          {playerStatistics.maxHealth}
        </li>
        <li>Defense: {playerStatistics.defense}</li>
        <li>Critical chance: {playerStatistics.critChance.toFixed(1)} %</li>
        <li>Dodge chance: {playerStatistics.dodgeChance.toFixed(1)} %</li>
        <br></br>
        <li>{`Stat points: ${statPoints}`}</li>
        {statistics.map((statisticEntry) => (
          <li>
            {`${statisticEntry[0]}: ${statisticEntry[1]} `}
            {statPoints > 0 && (
              <button onClick={() => increaseStatHandler(statisticEntry[0])}>
                +
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Statistics;
