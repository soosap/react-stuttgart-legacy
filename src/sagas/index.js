import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { AUTH_USER_SUCCEEDED, AUTH_USER_FAILED } from 'actions/types';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* authUserAsync(action) {
  try {
    // trying to call our api
    console.log('Attempting to authenticate the user via the api');
    const response = yield call(
      axios.post, 'https://jsonplaceholder.typicode.com/posts',
      // axios.post, 'https://jsonplaceholder.typicode.com/posts', action.payload,
    );

    console.log('response: ', response);


    yield put({ type: 'AUTH_USER_SUCCEEDED', payload: response.data });

  } catch (e) {
    // act on the error
    console.log('request failed!!!', e);

    yield put({ type: 'AUTH_USER_FAILED', message: e.message });
  }
}


/*
 |--------------------------------------------------------------------------
 | Watcher saga
 |--------------------------------------------------------------------------
 |
 | Listening for the actions to be dispatched. When it hears about these
 | actions occurring it will call our worker to do all that work for us.
 |
 | Spawn a new async task on each action.
 |
 */
export function* watchAuthUser() {
  console.log('redux saga in running the AUTH_USER action listener');

  yield takeEvery('AUTH_USER', authUserAsync);
}


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
