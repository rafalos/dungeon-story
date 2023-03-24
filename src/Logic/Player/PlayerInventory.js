import Equipment from '../Generator/Equipment';

export default class PlayerInventory {
  constructor() {
    this.gold = 0;
    this.slotAmount = 15;
    this.bag = [];
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
    this.addItem(new Equipment());
  }

  addItem(item) {
    if (this.bag.length >= this.slotAmount) {
      throw new Error('Your bag is full');
    } else {
      this.bag.push(item);
    }
  }
}
