import { all } from 'redux-saga/effects';
// import { formActionSaga } from 'redux-form-saga';
import { actionsWatcherSaga } from 'redux-saga-actions';
import { watchForEventActions } from './events.saga';
import { watchForContactActions } from './contact.saga';

/*
 |--------------------------------------------------------------------------
 | Root saga
 |--------------------------------------------------------------------------
 |
 | We take all the watcher sagas and combine them into one root saga.
 | When that runs it will run all of our watchers at once to make sure
 | everything is hooked up and listening for the actual actions we are
 | caring about.
 |
 | a.k.a. single entry point to start all our sagas at once.
 |
 */
export default function* rootSaga() {
  yield all([
    // formActionSaga(),
    actionsWatcherSaga(),
    watchForEventActions(),
    watchForContactActions(),
  ]);
}
