import Enemy from '../Enemy/Enemy';

export default class Battle {
  battleLog = []
  constructor(gameState, enemyType) {
    this.state = gameState;
    this.state.currentBattle = this;
    this.player = gameState.player;
    this.enemy = new Enemy(this);
    this.state.inBattle = true;
  }

  playerAction(actionNumber) {
    this.player.useSkill(actionNumber, this.enemy);
    this.enemy.attack(this.player);
  }

  battleOver() {
    this.state.inBattle = false;
    this.state.currentBattle = null;
  }

  writeToLog(action) {
    this.battleLog.push(action);
  }
}
