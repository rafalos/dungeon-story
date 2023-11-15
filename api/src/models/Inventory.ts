import { Schema, Types, model } from 'mongoose';

interface IInventory {
  characterID: Types.ObjectId;
  equipment: Types.ObjectId[];
}

const inventorySchema = new Schema<IInventory>({
  characterID: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
});

export default model<IInventory>('Inventory', inventorySchema);
