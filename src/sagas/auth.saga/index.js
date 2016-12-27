import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { AUTH_USER_SUBMIT, AUTH_USER_SUCCESS } from 'actions/types';
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
    console.log('action: ', action);

    const response = yield call(
      axios.post, `${process.env.BACKEND_URL}/auth/login`, action.payload,
    );

    yield put({ type: AUTH_USER_SUCCESS }); // wip, to be replaced by a better way to protect routes in react-router
    yield put(userAuthenticated(response.data));
  } catch (err) {
    console.log('err: ', err);

    yield put(userAuthenticationFailed(err.message));
    // yield put({ type: AUTH_USER_FAILURE, payload: err.message });
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

  yield takeEvery(AUTH_USER_SUBMIT, authenticateUserAsync);
}
