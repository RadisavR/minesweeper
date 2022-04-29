import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface GameLevelState {
  level: number;
}

const initialState: GameLevelState = {
  level: 1,
};

export const gameLevelSlice = createSlice({
  name: 'gameLevel',
  initialState,
  reducers: {
    setGameLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
  },
});

export const { setGameLevel } = gameLevelSlice.actions;

export const getGameLevel = (state: RootState) => state.level.level;

export default gameLevelSlice.reducer;
