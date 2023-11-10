import { Schema, model } from 'mongoose';
import { IEquipment, equipmentSchema } from './Equipment';

interface IShop {
  items: IEquipment[];
  lastRefreshed: string;
}

const shopSchema = new Schema<IShop>({
  items: [equipmentSchema],
  lastRefreshed: Date,
});

export default model<IShop>('Shop', shopSchema);
