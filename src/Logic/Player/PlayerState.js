import Classes from '../Resources/Classes';
import PlayerStatistics from './PlayerStatistics';
import PlayerInventory from './PlayerInventory';
import PlayerStatus from './PlayerStatus';
import PlayerEquipment from './PlayerEquipment';
import PlayerExperience from './PlayerExperience';
import PlayerSkills from './PlayerSkills';
import { randomInRange } from '../../Utils/Random';

export default class Player {
  constructor(name, role = Classes.knight) {
    this.playerName = name;
    this.role = role;
    this.statistics = new PlayerStatistics(role);
    this.status = new PlayerStatus(this.statistics);
    this.statistics.status = this.status;
    this.experience = new PlayerExperience(this.statistics, this.status);
    this.inventory = new PlayerInventory();
    this.equipment = new PlayerEquipment(
      this.inventory,
      this.statistics,
      this.playerStance,
    );
    this.skills = new PlayerSkills(role);
  }

  useSkill(slotNumber, target) {
    const skill = this.skills.skillList[slotNumber - 1];
    const damage =
      randomInRange(skill.damage.min, skill.damage.max) *
      this.statistics.strength;
    target.takeDamage(damage);
  }

  takeDamage(damageAmount) {
    this.status.currentHealth -= damageAmount;
    if (this.status.currentHealth <= 0) {
      this.handleDeath();
    }
  }

  handleDeath() {
    console.log('Player is dead');
  }
}
