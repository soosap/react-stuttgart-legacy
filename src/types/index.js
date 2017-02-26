export type Action = {|
  type: string,
  payload?: any
|};

export type Member = {|
  id: number,
  name: string,
  bio: string,
  photo?: Photo,
  role: 'organizer' | 'member'
|};

export type Event = {|
  id: string,
  name: string,
  yes_rsvp_count: number,
  time: number,
  utc_offset: number,
  photos?: Array<string>,
  waitlist_count?: number,
  created?: number,
  updated?: number,
  how_to_find_us?: string,
  venue?: number,
  visibility: 'public',
  status: 'past',
  link?: string,
  description?: string,
  group: number,
|};

export type PhotoAlbum = {|
  id: number,
  title: string,
  photo_count: number,
  event?: Object,
|};

export type Photo = {|
  id: number,
  highres_link?: string,
  photo_link: string,
  thumb_link: string,
  type: 'event',
  base_url: string,
  link?: string,
  created?: number,
  updated?: number,
  utc_offset?: number,
  member?: Member,
  photo_album?: PhotoAlbum,
|};

export type Venue = {|
  id: number,
  name: string,
  lat?: number,
  lon?: number,
  repinned?: boolean,
  address_1: string,
  city: string,
  country: string,
  localized_country_name: string,
|};

export type Technology =
  | 'react'
  | 'redux'
  | 'graphql'
  | 'apollo'
  | 'relay'
  | 'flowtype';

export type Speaker = {|
  twitter: string,
|};

export type Talk = {|
  description: string,
  speaker: Speaker,
  technology: Technology,
  title: string,
|};

