/* @flow */
import R from 'ramda';
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';
import axios from 'axios';

import {
  FETCH_EVENTS_REQUEST,
  FETCH_PHOTOS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_PHOTOS_FAILURE,
  FETCH_VENUES_SUCCESS,
  SELECT_EVENT_REQUEST,
  SELECT_EVENT_SUCCESS,
  SELECT_EVENT_FAILURE,
} from '../../actions/types';

import { selectEvent } from '../../actions/events';
import type { Action } from '../../types';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* handleFetchEvents(action: Action): Generator<*, *, *> {
  try {
    // console.log('action', action);

    const response = yield call(axios.get, '/meetup/events');
    const stripped = R.compose(
      R.map(R.evolve({
        sponsors: R.map(R.evolve({
          contacts: R.map(R.prop('fields')),
        })),
        talks: R.map(R.evolve({
          speakers: R.map(R.prop('fields')),
        }))
      })),
      R.map(R.evolve({
        sponsors: R.map(R.prop('fields')),
        talks: R.map(R.prop('fields')),
        venue: R.prop('fields'),
      })),
      R.map(R.prop('fields')),
      R.path(['data', 'items'])
    )(response);

    // console.log('stripped', stripped);

    const contact = new schema.Entity('contacts');
    const speaker = new schema.Entity('speakers', { contacts: [contact] });
    const venue = new schema.Entity('venues');
    const talk = new schema.Entity('talks', { speakers: [speaker] });
    const sponsor = new schema.Entity('sponsors', { contacts: [contact] });
    const event = new schema.Entity('events', { venue, talks: [talk], sponsors: [sponsor] });

    const normalizedData = normalize(stripped, [event]);
    // console.log('normalizedData', normalizedData);
    const { entities: { events, speakers, sponsors, talks, venues }, result } = normalizedData;

    // yield put({ type: FETCH_ORGANIZATION_SUCCESS, payload: organization });
    yield put({ type: FETCH_EVENTS_SUCCESS, payload: events });
    // yield put({ type: FETCH_VENUES_SUCCESS, payload: venues });
    // yield put(selectEvent(lastEvent.id));
  } catch (error) {
    yield put({ type: FETCH_EVENTS_FAILURE, payload: error });
  }
}

export function* handleFetchPhotos(action: Action): Generator<*, *, *> {
  try {
    const eventIds = R.propOr([], 'eventIds', action.payload);
    const responses = yield eventIds.map(eventId => {
      return call(axios.get, `/meetup/events/${eventId}/photos`);
    });

    const photoData = responses.map(response => response.data);
    const photo = new schema.Entity('photos');
    const normalizedData = yield normalize(photoData, [[photo]]);
    const { entities: { photos }, result } = normalizedData;

    const events = {};
    const forEachEventId = R.addIndex(R.forEach(R.__, eventIds));
    forEachEventId((id, index) => events[id] = { photos: result[index] });

    yield put({ type: FETCH_PHOTOS_SUCCESS, payload: { photos, events } });
  } catch (error) {
    yield put({ type: FETCH_PHOTOS_FAILURE, payload: error });
  }
}

export function* handleSelectEvent(action: Action): Generator<*, *, *> {
  try {
    const selectedEventId = R.propOr(null, 'event', action.payload);

    yield handleFetchPhotos({
      type: FETCH_PHOTOS_REQUEST,
      payload: { eventIds: [selectedEventId] },
    });

    yield put({
      type: SELECT_EVENT_SUCCESS,
      payload: { event: selectedEventId },
    });
  } catch (error) {
    yield put({ type: SELECT_EVENT_FAILURE, payload: error });
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
export function* watchForEventActions(): Generator<*, *, *> {
  yield takeEvery(FETCH_EVENTS_REQUEST, handleFetchEvents);
  yield takeEvery(FETCH_PHOTOS_REQUEST, handleFetchPhotos);
  yield takeLatest(SELECT_EVENT_REQUEST, handleSelectEvent);
}
