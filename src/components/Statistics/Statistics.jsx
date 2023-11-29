import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerStatisticActions } from '../../store/player-statistics-slice';
import { playerStatusActions } from '../../store/player-status-slice';
import classes from './Statistics.module.css';
import Button from '../UI/Button';
import Container from '../UI/Container';
import { ImStatsBars2 } from "react-icons/im";


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
    <Container title='Statistics' variant='green' icon={ImStatsBars2}>
      <ul className='text-white'>
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
        <li className={classes.statpoints}>{`Stat points: ${statPoints}`}</li>
        {statistics.map((statisticEntry) => (
          <li className={classes.statistic}>
            {statPoints > 0 && (
              <Button onClick={() => increaseStatHandler(statisticEntry[0])}>
                +
              </Button>
            )}
            {`${statisticEntry[0]}: ${statisticEntry[1]} `}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Statistics;
