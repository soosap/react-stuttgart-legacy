/* @flow */
import type { Event } from './lib/event.type';
import type { Member } from './lib/member.type';
import type { Photo } from './lib/photo.type';
import type { Sponsor } from './lib/sponsor.type';
import type { Talk } from './lib/talk.type';
import type { Technology } from './lib/technology.type';
import type { Venue } from './lib/venue.type';

type Action = {|
  type: string,
  payload: ?Object,
|};

type Modal = {|
  modalType: ?string,
  modalProps: ?Object,
|};

export type {
  Action,
  Event,
  Member,
  Modal,
  Photo,
  Sponsor,
  Talk,
  Technology,
  Venue,
};
