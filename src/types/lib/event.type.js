/* @flow */
import type { Photo } from './photo.type';
import type { Talk } from './talk.type';
import type { Venue } from './venue.type';
import type { Sponsor } from './sponsor.type';

export type Event = {|
  id: string,
  name: string,
  eventDate: Date,
  yes_rsvp_count?: number,
  waitlist_count?: number,
  photos?: Array<Photo>,
  talks?: Array<Talk>,
  venue?: Venue,
  sponsors?: Array<Sponsor>
|};
