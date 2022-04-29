import fieldValuesReducer, {
  MineFieldsState,
  setBoardValues,
} from './fieldValuesSlice';

describe('field value reducer', () => {
  const initialState: MineFieldsState = {
    values: [],
  };

  it('handles field value state', () => {
    const actual = fieldValuesReducer(
      initialState,
      setBoardValues({
        fieldValues: [
          ['1', '3'],
          ['1', '1'],
          ['2', '4'],
          ['3', '5'],
          ['6', '1'],
          ['1', '4'],
          ['2', '1'],
          ['2', '4'],
        ],
      }),
    );

    expect(actual.values.length).toEqual(8);
  });
});
