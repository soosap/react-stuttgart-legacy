import R from 'ramda';
import { takeEvery } from 'redux-saga';
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
  FETCH_ORGANIZATION_SUCCESS,
  FETCH_VENUES_SUCCESS,
} from '../../actions/types';

import { selectEvent } from '../../actions/events';

/*
 |--------------------------------------------------------------------------
 | Worker saga
 |--------------------------------------------------------------------------
 |
 | Basically doing all of the hard work calling the API doing all the
 | async stuff and then returning a response.
 |
 */
export function* handleFetchEvents(action) {
  try {
    const responses = yield action.payload.eventLinks.map(eventId => {
      return call(axios.get, `/meetup/events/${eventId}`);
    });

    const eventData = responses.map(response => response.data);
    const venue = new schema.Entity('venues');
    const group = new schema.Entity('groups');
    const event = new schema.Entity('events', { venue, group });

    const normalizedData = normalize(eventData, [event]);
    const { entities: { events, groups, venues }, result } = normalizedData;

    const latestEvent = events[result[0]];
    const groupId = latestEvent.group;
    const organization = groups[groupId];

    yield put({ type: FETCH_ORGANIZATION_SUCCESS, payload: organization });
    yield put({ type: FETCH_EVENTS_SUCCESS, payload: events });
    yield put({ type: FETCH_VENUES_SUCCESS, payload: venues });
    yield put(selectEvent(latestEvent.id));
  } catch (error) {
    yield put({ type: FETCH_EVENTS_FAILURE, payload: error });
  }
}

export function* handleFetchPhotos(action) {
  try {
    const responses = yield action.payload.eventIds.map(eventId => {
      return call(axios.get, `/meetup/events/${eventId}/photos`);
    });

    const photoData = responses.map(response => response.data);
    const photo = new schema.Entity('photos');
    const normalizedData = yield normalize(photoData, [[photo]]);
    const { entities: { photos }, result } = normalizedData;

    const eventIds = action.payload.photoGalleryLinks.map(R.pipe(R.split('/'), R.nth(5)));

    const events = {};
    const forEachEventId = R.addIndex(R.forEach(R.__, eventIds));
    forEachEventId((id, index) => events[id] = { photos: result[index]});

    yield put({ type: FETCH_PHOTOS_SUCCESS, payload: { photos, events } });
  } catch (error) {
    yield put({ type: FETCH_PHOTOS_FAILURE, payload: error });
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
export function* watchForFetchEvents() {
  yield takeEvery(FETCH_EVENTS_REQUEST, handleFetchEvents);
  yield takeEvery(FETCH_PHOTOS_REQUEST, handleFetchPhotos);
}
