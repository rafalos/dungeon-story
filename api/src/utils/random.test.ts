import { randomInRange } from './random';

describe('randomInRange', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.12345);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should return a number', () => {
    const result = randomInRange(5, 10);

    console.log(result);

    expect(typeof result).toBe('number');
  });
});
