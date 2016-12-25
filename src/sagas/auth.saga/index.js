import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { AUTH_USER, AUTH_USER_SUCCEEDED } from 'actions/types';
import { userAuthenticated, userAuthenticationFailed } from 'actions/users';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* authenticateUserAsync(action) {
  try {
    const response = yield call(
      axios.post, `${process.env.BACKEND_URL}/auth/login`, action.payload,
    );

    /*
     |--------------------------------------------------------------------------
     | Action creator vs. dispatch
     |--------------------------------------------------------------------------
     |
     | We first set the authenticated flag to true and then in the next
     | iteration put the userAuthenticated method tu use! Else the redirect
     | to the protected "/dashboard" route would not get through.
     |
     */
    yield put({ type: AUTH_USER_SUCCEEDED });
    yield put(userAuthenticated(response.data));
  } catch (err) {
    yield put(userAuthenticationFailed(err.message));
    // yield put({ type: AUTH_USER_FAILED, payload: err.message });
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
export function* watchAuthenticateUser() {
  console.log('redux saga in running the AUTH_USER action listener');

  yield takeEvery(AUTH_USER, authenticateUserAsync);
}
