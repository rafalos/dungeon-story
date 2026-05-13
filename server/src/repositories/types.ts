import { ExplorationDocument, IExploration } from '../models/Exploration';
import { IStory, StoryDocument } from '../models/Story';

export interface Repository<TInput, TDoc> {
  getById: (id: string) => Promise<TDoc | null>;
  delete: (id: string) => Promise<void>;
  create: (entity: Partial<TInput>) => TDoc
  update: (id: string, entity: Partial<TInput>) => Promise<void>;
  save: (entity: TDoc) => Promise<void>;
}

export interface StoryRepository extends Repository<IStory, StoryDocument> {
  getForExploration: (explorationID: string) => Promise<StoryDocument | null>;
  getAll: () => Promise<StoryDocument[]>;
}

export interface ExplorationRepository
  extends Repository<IExploration, ExplorationDocument> {
  countActiveForUser: (userID: string) => Promise<number>;
  getAllActiveForUser: (userID: string) => Promise<ExplorationDocument[]>;
  getByIdForUser: (
    explorationID: string,
    userID: string
  ) => Promise<ExplorationDocument | null>;
}
