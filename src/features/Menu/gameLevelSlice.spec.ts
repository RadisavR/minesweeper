import levelReducer, { GameLevelState, setGameLevel } from './gameLevelSlice';

describe('level reducer', () => {
  const initialState: GameLevelState = {
    level: 1,
  };

  it('handles game level state', () => {
    const actual = levelReducer(initialState, setGameLevel(4));

    expect(actual.level).toEqual(4);
  });
});
