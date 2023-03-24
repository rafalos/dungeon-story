import { STANCE_IDLE, STANCE_BATTLE } from '../Utils/Constants';

export default class PlayerStance {
  constructor() {
    this.stance = STANCE_IDLE;
  }

  isInBattle() {
    return this.stance === STANCE_BATTLE;
  }

  switchStance() {
    this.stance = this.stance === STANCE_IDLE ? STANCE_BATTLE : STANCE_IDLE;
  }
}
