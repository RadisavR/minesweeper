import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MineFieldsState {
  values: string[][];
}

export interface MineFieldsPayload {
  fieldValues: string[][];
}

const initialState: MineFieldsState = {
  values: [],
};

export const fieldValuesSlice = createSlice({
  name: 'fieldValues',
  initialState,
  reducers: {
    setBoardValues: (state, action: PayloadAction<MineFieldsPayload>) => {
      const mines = action.payload.fieldValues;
      state.values = mines;
    },
  },
});

export const { setBoardValues } = fieldValuesSlice.actions;

export const getBoardValues = (state: RootState) => state.fieldValues.values;

export default fieldValuesSlice.reducer;
