import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type MineFieldsStatus = 'In progress' | 'You won' | 'Game Over!';
export interface MineFieldsState {
  values: string[][];
  level: number;
  status: MineFieldsStatus;
}

export interface MineFieldsPayload {
  values: string[][];
}

const initialState: MineFieldsState = {
  values: [],
  level: 1,
  status: 'In progress',
};

export const boardSlice = createSlice({
  name: 'mineFields',
  initialState,
  reducers: {
    setBoardValues: (state, action: PayloadAction<MineFieldsPayload>) => {
      const mines = action.payload.values;
      state.values = mines;
    },
    setGameLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    setGameStatus: (state, action: PayloadAction<MineFieldsStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setBoardValues, setGameLevel, setGameStatus } =
  boardSlice.actions;

export const getBoardValues = (state: RootState) => state.mineFields.values;
export const getGameLevel = (state: RootState) => state.mineFields.level;
export const getGameStatus = (state: RootState) => state.mineFields.status;

export default boardSlice.reducer;
