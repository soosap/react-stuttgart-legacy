import { watchAuthUser } from './auth.saga';

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
  yield [
    watchAuthUser(),
  ];
}
