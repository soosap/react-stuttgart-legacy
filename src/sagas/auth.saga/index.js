import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { stopSubmit, reset } from 'redux-form';
import axios from 'axios';
import { AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAILURE } from 'actions/types';
import { userAuthenticated } from 'actions/users';

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

    yield put({ type: AUTH_USER_SUCCESS }); // wip, to be replaced by a better way to protect routes in react-router
    yield put(userAuthenticated(response.data));
  } catch (error) {
    const { response: { data } } = error;

    // Populate submitErrors and submitFailed/submitSucceeded
    // If you pass an object as second parameter it assumes the submit failed with errors written to that object.
    yield put(stopSubmit('loginForm', data));
    // yield put({ type: AUTH_USER_FAILURE });
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

  yield takeEvery(AUTH_USER_REQUEST, authenticateUserAsync);
}
