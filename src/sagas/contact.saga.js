/* @flow */
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { sendEmail } from '../actions/contact';
import type { Action } from '../lib/types';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* handleSendEmail(action: Action): Generator<*, *, *> {
  try {
    const response = yield call(axios.post, '/become-a-speaker', action.payload);

    console.log('response', response);
  } catch (error) {
    yield put(sendEmail.failure(error));
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
export function* watchForContactActions(): Generator<*, *, *> {
  yield takeLatest(sendEmail.REQUEST, handleSendEmail);
}
