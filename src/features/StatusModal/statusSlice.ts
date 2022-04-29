import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type GameStatus = 'In progress' | 'You won' | 'Game Over!';
export interface Status {
  status: GameStatus;
}

const initialState: Status = {
  status: 'In progress',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setGameStatus } = statusSlice.actions;

export const getGameStatus = (state: RootState) => state.status.status;

export default statusSlice.reducer;
