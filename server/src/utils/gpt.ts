export const composeMessage = (role: 'system' | 'user', content: string) => ({
  role,
  content,
});
