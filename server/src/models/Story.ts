import { Schema, Types, model } from 'mongoose';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export interface IStory {
  location: string;
  exploration: Types.ObjectId;
  chapters: string[];
  messages: ChatCompletionMessageParam[];
  published: boolean;
}

export const storySchema = new Schema<IStory>(
  {
    location: String,
    exploration: {
      type: Schema.Types.ObjectId,
      Ref: 'Exploration',
    },
    chapters: [String],
    messages: [],
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

storySchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    ret.id = ret._id;
    delete ret._id;
    delete ret.exploration;
    delete ret.messages;
    delete ret.updatedAt;
  },
});

export default model<IStory>('Story', storySchema);
