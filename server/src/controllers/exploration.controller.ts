import { type NextFunction, Request, Response } from 'express';
import * as ExplorationService from '../services/exporationService';
import { explorationRepository } from '../repositories/expoloration.repository';

export const getCurrentState = async (
  request: Request<{
    id: string;
  }>,
  response: Response
) => {
  const currentState = await ExplorationService.getState(request.params.id);
  response.json({
    message: currentState,
  });
};

export const movePosition = async (
  request: Request<{
    id: string;
  }>,
  response: Response
) => {
  const result = await ExplorationService.advance(
    request.params.id,
    request.user
  );

  response.json({
    healthDiff: result?.healthDiff,
    experienceGained: result?.experienceGained,
    itemsFound: result?.itemsFound,
    battleLog: result?.battleLog,
  });
};

export const generateExploration = async (
  request: Request,
  response: Response
) => {
  const exploration = await ExplorationService.generate(request.user);

  response.status(201).json(exploration);
};

export const getExploration = async (
  request: Request<{
    id: string;
  }>,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;

  const exploration = await explorationRepository.getById(id);

  if (!exploration) return next('Exploration not found');

  response.json(exploration);
};

export const getExplorations = async (request: Request, response: Response) => {
  const explorations = await ExplorationService.getAll(request.user._id);

  response.json(explorations);
};
