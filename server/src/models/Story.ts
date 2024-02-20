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

export default model<IStory>('Story', storySchema);
