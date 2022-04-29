import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import statusReducer from '../features/StatusModal/statusSlice';
import levelReducer from '../features/Menu/gameLevelSlice';
import fieldValuesReducer from '../features/Board/fieldValuesSlice';
import { rootSaga } from '../app/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    status: statusReducer,
    level: levelReducer,
    fieldValues: fieldValuesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
