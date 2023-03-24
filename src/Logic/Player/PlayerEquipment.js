export default class PlayerEquipment {
  constructor(inventory, statistics, stance) {
    this.stance = stance;
    this.inventory = inventory;
    this.statistics = statistics;
    this.currentlyWorn = {
      helmet: null,
      torso: null,
      legs: null,
      boots: null,
      ring1: null,
      leftHand: null,
      rightHand: null,
    };
  }

  wearItem(item) {
    if (this.currentlyWorn[item.equipmentSlot]) {
      throw new Error('You already have equipped item in that slot');
    } else {
      this.currentlyWorn[item.equipmentSlot] = item;
      this.statistics.mutateStats(item.metadata, 'inc');
      const currentInventory = this.inventory.bag;
      const itemIdx = currentInventory.findIndex((el) => el === item);
      currentInventory.splice(itemIdx, 1);
    }
  }

  unwearItem(slot) {
    if (this.currentlyWorn[slot] == null) {
      throw new Error('No items currently in that slot');
    }
    this.inventory.addItem(this.currentlyWorn[slot]);
    this.statistics.mutateStats(this.currentlyWorn[slot].metadata, 'dec');
    this.currentlyWorn[slot] = null;
  }
}
