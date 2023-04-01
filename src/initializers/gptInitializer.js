import { OpenAIApi, Configuration } from 'openai';
import { GPT } from '../config';

const configuration = new Configuration({
  organization: GPT.ORGANIZATION_ID,
  apiKey: GPT.API_KEY,
});

export default new OpenAIApi(configuration);
