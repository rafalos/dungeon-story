type Seed = string[];

interface Exploration {
  active: boolean;
  currentStage: number;
  id: string;
  seed: Seed;
  name: string;
}
