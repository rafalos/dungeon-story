import { generateSeed } from './seed';

describe('generateSeed', () => {
  it('should contain five elements', () => {
    const seed = generateSeed();

    expect(seed).toHaveLength(5);
  });
});
