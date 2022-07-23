// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {watchIncreaseCounter, watchDecreaseCounter} from '../sagas/saga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([watchIncreaseCounter, watchDecreaseCounter]);
}
