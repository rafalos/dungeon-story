import { randomInRange } from '../../utils/random';

class Enemy {
  constructor() {
    this.name = 'Rat';
    this.maxHealth = 50;
    this.currentHealth = this.maxHealth;
    this.damage = {
      min: 1,
      max: 15,
    };
    this.defense = 10;
    this.experience = {
      min: 90,
      max: 155,
    };
  }

  attack(player) {
    const damage = randomInRange(this.minDamage, this.maxDamage);
    player.takeDamage(damage);
  }

  takeDamage(damageAmount) {
    this.currentHealth -= damageAmount;
    if (this.currentHealth <= 0) {
      this.handleDeath();
    }
    this.card.refreshHealthBar();
  }

  // handleDeath() {
  //   this.dropItems();
  //   const inc = this.battle.player.experience.increaseExperience(
  //     randomInRange(this.experience.min, this.experience.max),
  //   );
  //   window.state.UIcontrollers.main.playerStatus.refreshExpBar(inc);
  //   this.battle.battleOver();
  //   this.battle.area.destroyArea();
  // }

  // dropItems() {
  //   const randomItem = new Equipment();
  //   this.battle.player.inventory.addItem(randomItem);
  // }
}

export default new Enemy();
