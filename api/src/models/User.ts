import mongoose, { Schema, Types, model } from 'mongoose';

export interface IUser {
  email: string;
  character: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character',
  },
});

export default model<IUser>('User', userSchema);
