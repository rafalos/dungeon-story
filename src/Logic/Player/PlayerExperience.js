import LevelBrackets from '../Resources/LevelBrackets';

export default class PlayerExperience {
  constructor(statistics) {
    this.statistics = statistics;
    this.level = 1;
    this.reconfigureExperience();
  }

  increaseExperience(value) {
    this.currentExperience += value;
    if (this.currentExperience >= this.neededExperience) {
      this.handleLevelUp();
      return true;
    }
    return false;
  }

  handleLevelUp() {
    this.level += 1;
    this.reconfigureExperience();
    this.statistics.statPoints += 4;
  }

  reconfigureExperience() {
    this.currentExperience = 0;
    this.neededExperience = LevelBrackets[this.level - 1];
  }
}
