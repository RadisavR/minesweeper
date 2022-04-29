import { put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { setBoardValues } from './fieldValuesSlice';
import { setGameStatus } from '../StatusModal/statusSlice';
import { ws } from '../../app/socket';

const LOSE = 'open: You lose';
const WIN = 'open: You win';
const NEW = 'new:';
const IN_PROGRESS = 'open: OK';

const initWebSocket = () => {
  return eventChannel((emit) => {
    ws.onopen = () => {
      ws.send('new 1');
    };

    ws.onmessage = (event) => {
      const data = event.data;
      return emit({ data });
    };

    return () => ws.close();
  });
};

export default function* boardSaga(): any {
  const webSocketChannel = yield call(initWebSocket);

  while (true) {
    const event = yield take(webSocketChannel);
    const data = event && event.data ? event.data : '';

    if (data.startsWith('map:')) {
      const fieldData = data
        .replace('map:', '')
        .split('\n')
        .filter((x: string) => x !== '');

      const fieldValues: string[][] = [];
      fieldData.forEach((row: string) => {
        fieldValues.push(
          Array.from(row).map((x: string) => (x === '□' ? '' : x)),
        );
      });

      yield put(setBoardValues({ fieldValues }));
    } else if (data === LOSE) {
      yield put(setGameStatus('Game Over!'));
      yield ws.send('map');
    } else if (data.startsWith(WIN)) {
      yield put(setGameStatus('You won'));
      yield ws.send('map');
    } else if (data.startsWith(NEW) || data.startsWith(IN_PROGRESS)) {
      yield put(setGameStatus('In progress'));
      yield ws.send('map');
    }
  }
}
