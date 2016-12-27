import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import { addFormSubmitSagaTo } from 'redux-form-submit-saga';
import rootReducer from 'reducers';
import allMySagas from 'sagas';

const rootSaga = addFormSubmitSagaTo(allMySagas);

/*
 |==========================================================================
 | PRODUCTION
 |--------------------------------------------------------------------------
 */
function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    /*
     |--------------------------------------------------------------------------
     | redux-saga
     |--------------------------------------------------------------------------
     |
     | redux-saga is there to handle impure operations or side effects like
     | making API calls or touching a database inside the redux flow.
     |
     */
    sagaMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
  ));

  sagaMiddleware.run(rootSaga);

  return store;
}

/*
 |==========================================================================
 | DEVELOPMENT
 |--------------------------------------------------------------------------
 */
function configureStoreDevelopment(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    /*
     |--------------------------------------------------------------------------
     | redux-immutable-state-invariant
     |--------------------------------------------------------------------------
     |
     | Redux middleware that spits an error on you when you try to mutate your
     | state either inside a dispatch or between dispatches.
     |
     */
    reduxImmutableStateInvariant(),

    /*
     |--------------------------------------------------------------------------
     | redux-saga
     |--------------------------------------------------------------------------
     |
     | redux-saga is there to handle impure operations or side effects like
     | making API calls or touching a database inside the redux flow.
     |
     */
    sagaMiddleware,
  ];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    /*
     |--------------------------------------------------------------------------
     | Hot Module Replacement for reducers
     |--------------------------------------------------------------------------
     |
     | Enable Webpack hot module replacement for reducers.
     |
     */
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default (process.env.NODE_ENV === 'development' ? configureStoreDevelopment : configureStore);
