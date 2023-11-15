import { Schema, Types, model } from 'mongoose';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export interface IStory {
  exploration: Types.ObjectId;
  chapters: string[];
  messages: ChatCompletionMessageParam[];
}

export const storySchema = new Schema<IStory>({
  exploration: {
    type: Schema.Types.ObjectId,
    Ref: 'Exploration',
  },
  chapters: [String],
  messages: [],
});

export default model<IStory>('Story', storySchema);
