import { take } from 'redux-saga/effects';

export function* watchAndLog(getState) {
  // yield* takeEvery('*', function* logger(action) {
  //   console.log('action', action);
  //   console.log('state after', getState())
  // })
  while(true) {
    let action = yield take('*');
    console.log('action', action);
    console.log('state after', getState());

  }
}
