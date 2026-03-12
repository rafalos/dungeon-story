import { Schema, Types, model } from 'mongoose';

interface IShop {
  id?: Types.ObjectId;
  items: Types.ObjectId[];
  nextRefresh: string;
}

const shopSchema = new Schema<IShop>({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipment',
    },
  ],
  nextRefresh: Date,
});

shopSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
  },
});

export default model<IShop>('Shop', shopSchema);
