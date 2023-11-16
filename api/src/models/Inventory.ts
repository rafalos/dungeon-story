import { Schema, Types, model } from 'mongoose';

interface IInventory {
  user: Types.ObjectId;
  equipment: Types.ObjectId[];
}

const inventorySchema = new Schema<IInventory>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  equipment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
});

export default model<IInventory>('Inventory', inventorySchema);
