import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware] :
  [sagaMiddleware];

// TODO: fix createStore - depricated code, use configureStore
const store = configureStore({
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  reducer: rootReducer,
  // adds all middleware to our project including saga and logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareList),
});

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;