// import {call, put, takeEvery} from 'redux-saga/effects';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({type: 'USER_FETCH_SUCCEEDED', user: user});
//   } catch (e) {
//     yield put({type: 'USER_FETCH_FAILED', message: e.message});
//   }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
// }

// import {takeEvery, call, put} from 'redux-saga/effects';
// import {FETCH_PRODUCTS} from '../types/products.types';
// import productsService from '../services/products.service';
// import {setProducts} from '../actions/products.actions';

// function* fetchProducts() {
//   try {
//     const products = yield call(productsService.getAllProducts);

//     yield put(setProducts(products));
//   } catch (e) {}
// }

// export function* waitForFetchProducts() {
//   yield takeEvery(FETCH_PRODUCTS, fetchProducts);
// }

// Imports: Dependencies
import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
    // yield delay(4000);
    // Dispatch Action To Redux Store
    yield put({
      type: 'INCREMENT',
      // value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
// Watcher: Increase Counter Async
export function* watchIncreaseCounter() {
  // Take Last Action Only
  yield takeEvery('INCREMENT', increaseCounterAsync);
}
// Worker: Decrease Counter
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    // yield delay(4000);
    console.log('decrement all');
    yield put({
      type: 'DECREMENT',
      // value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
// Watcher: Decrease Counter
export function* watchDecreaseCounter() {
  // Take Last Action Only
  yield takeEvery('DECREMENT', decreaseCounter);
}
