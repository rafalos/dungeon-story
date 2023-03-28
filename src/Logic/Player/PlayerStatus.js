export default class PlayerStatus {
  constructor(statistics) {
    this.recalculateStats(statistics);
    this.currentHealth = this.maxHealth;
    this.currentMana = this.maxMana;
  }

  recalculateStats(statistics) {
    this.defense = statistics.defense;
    this.maxHealth = statistics.vitality * 50;
    this.minDamage = statistics.strength * 2;
    this.maxDamage = statistics.strength * 5;
    this.maxMana = statistics.intelligence * 20;
    this.critChance = statistics.critChance;
    this.blockChance = statistics.blockChance;
    this.fortune = statistics.fortune;
    this.lifeSteal = statistics.lifeSteal;
    this.coldDamage = statistics.coldDamage;
    this.bloodDamage = statistics.bloodDamage;
    this.lightingDamage = statistics.lightingDamage;
    this.fireDamage = statistics.fireDamage;
    this.speed = statistics.speed;
  }
}
