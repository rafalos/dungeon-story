import axios from 'axios';

const BASE_URL = 'http://llm:11434/api/generate';

interface LLMResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  done_reason: string;
  context: number[];
  total_duration: number;
  load_duration: number;
  prompt_eval_count: number;
  prompt_eval_duration: number;
  eval_count: number;
  eval_duration: number;
}

export const getCompletion = async (prompt: string): Promise<string> => {
  const { data } = await axios.post<LLMResponse>(BASE_URL, {
    model: 'llama3.2:3b',
    prompt,
    stream: false,
    options: {
      temperature: 1.0,
      top_p: 0.9
    }
  });

  return data.response;
};
