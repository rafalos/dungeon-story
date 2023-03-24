import Player from './Player/PlayerState';

class GameState {
  constructor() {
    this.player = new Player('Rafal');
  }
}

export default new GameState();
