export default class PlayerStatistics {
  constructor(chosenClass) {
    this.initStatistics(chosenClass);
  }

  initStatistics(chosenClass) {
    const { startingStats } = chosenClass;
    this.statPoints = 0;
    this.fortune = 0;
    this.defense = 0;
    for (const [key, value] of Object.entries(startingStats)) {
      this[key] = value;
    }
  }

  mutateStats(statObject, mode) {
    for (const [key, value] of Object.entries(statObject)) {
      if (mode === 'inc') {
        this[key] += value;
      } else {
        this[key] -= value;
      }
    }
    this.status.recalculateStats(this);
  }
}
