import { takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { reset, SubmissionError } from 'redux-form';
import axios from 'axios';

import {
  authenticate, userAuthenticated,
  register, userRegistered,
} from '../../actions/users';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* handleUserAuthentication(action) {
  try {
    console.log('action: ', action);

    const response = yield call(
      // axios.post, `${process.env.BACKEND_URL}/auth/login`, action.payload,
    );

    console.log('response: ', response);

    yield put(authenticate.success());
    // wip, to be replaced by a better way to protect routes in react-router
    // we call authenticate.success() one more time in userAuthenticated

    yield put(userAuthenticated(response.data));
  } catch (error) {
    const { response: { data } } = error;

    // Populate submitErrors and submitFailed/submitSucceeded
    // If you pass an object as second parameter it assumes the submit failed with errors written to that object.
    yield put(authenticate.failure(new SubmissionError(data)));
  }
}

export function *handleUserRegistration(action) {
  console.log('action: ', action);

  try {
    const response = yield call(
      // axios.post, `${process.env.BACKEND_URL}/auth/register`, action.payload,
    );

    yield put(authenticate.success());
    // wip, to be replaced by a better way to protect routes in react-router
    // we call authenticate.success() one more time in userRegistered

    yield put(userRegistered(response.data));
  } catch (error) {
    const { response: { data } } = error;
    yield put(register.failure(new SubmissionError(data)));
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

  yield takeEvery(authenticate.REQUEST, handleUserAuthentication);
  yield takeEvery(register.REQUEST, handleUserRegistration);
}
