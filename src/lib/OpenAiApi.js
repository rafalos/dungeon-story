import { OpenAIApi, Configuration } from 'openai';
import { GPT_API_KEY } from '../utils/config';

const configuration = new Configuration({
  apiKey: GPT_API_KEY,
});

export default new OpenAIApi(configuration);
