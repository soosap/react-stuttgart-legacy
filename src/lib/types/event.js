/* @flow */
import type { Photo } from './photo';
import type { Talk } from './talk';
import type { Venue } from './venue';
import type { Sponsor } from './sponsor';

export type Event = {|
  id: string,
  name: string,
  eventDate: Date,
  yes_rsvp_count?: number,
  waitlist_count?: number,
  photos?: Array<Photo>,
  talks: Array<Talk>,
  venue?: Venue,
  sponsors: Array<Sponsor>
|};
