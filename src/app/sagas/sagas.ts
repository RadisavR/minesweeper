import { all } from 'redux-saga/effects';
import boardSaga from '../../features/Board/boardSaga';

export function* rootSaga() {
  yield all([boardSaga()]);
}
