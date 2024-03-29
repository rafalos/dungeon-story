import { Schema, Types, model } from 'mongoose';

interface IShop {
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
    delete ret.__v;
    ret.id = ret._id;

    delete ret._id;
  },
});

export default model<IShop>('Shop', shopSchema);
