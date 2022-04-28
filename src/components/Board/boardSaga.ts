import { put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { setBoardValues, setGameStatus } from './boardSlice';
import { ws } from '../../app/socket';

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
      const eventData = data
        .replace('map:', '')
        .split('\n')
        .filter((x: string) => x !== '');

      const values: string[][] = [];
      eventData.forEach((row: string) => {
        values.push(Array.from(row).map((x: string) => (x === '□' ? '' : x)));
      });

      yield put(setBoardValues({ values }));
    } else if (data === 'open: You lose') {
      yield put(setGameStatus('Game Over!'));
      yield ws.send('map');
    } else if (data.startsWith('open: You win')) {
      yield put(setGameStatus('You won'));
      yield ws.send('map');
    } else if (data.startsWith('new:') || data.startsWith('open: OK')) {
      yield put(setGameStatus('In progress'));
      yield ws.send('map');
    }
  }
}
