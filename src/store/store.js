import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './rootSaga';
import rootReducer from '.';

// const middleware = [thunk];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// const configureStore = () =>
//   createStore(rootReducer, applyMiddleware(...sagaMiddleware));

// const store = configureStore();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
