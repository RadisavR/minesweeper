import { all } from 'redux-saga/effects';
import boardSaga from '../../components/Board/boardSaga';

export function* rootSaga() {
  yield all([boardSaga()]);
}
