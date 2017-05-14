/* @flow */
export type Photo = {|
  id: number,
  highres_link?: string,
  photo_link: string,
  thumb_link: string,
  type: string,
  base_url: string,
  link?: string,
  created?: number,
  updated?: number,
  utc_offset?: number,
  member?: Object,
  photo_album?: Object,
|};
