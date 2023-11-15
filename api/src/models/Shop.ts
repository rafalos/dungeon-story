import { Schema, Types, model } from 'mongoose';
import { IEquipment, equipmentSchema } from './Equipment';

interface IShop {
  items: Types.ObjectId[];
  lastRefreshed: string;
}

const shopSchema = new Schema<IShop>({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
  lastRefreshed: Date,
});

export default model<IShop>('Shop', shopSchema);
