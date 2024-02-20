import mongoose, { Schema, Types, model } from 'mongoose';

interface Inventory {
  user: Types.ObjectId;
  equipment: Types.ObjectId[];
  worn: Types.ObjectId[];
}

const inventorySchema = new Schema<Inventory>({
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
  worn: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
});

inventorySchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    ret.id = ret._id;
    delete ret._id;
    delete ret.user;
  },
});

export default model<Inventory>('Inventory', inventorySchema);
