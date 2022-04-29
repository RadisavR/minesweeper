import statusReducer, { Status, setGameStatus } from './statusSlice';

describe('status reducer', () => {
  const initialState: Status = {
    status: 'In progress',
  };

  it('handles game status state', () => {
    const actual = statusReducer(initialState, setGameStatus('Game Over!'));

    expect(actual.status).toEqual('Game Over!');
  });
});
