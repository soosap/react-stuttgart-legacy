import type { Element } from 'react';

export type LightBoxImage = {
  src: string,
  srcSet?: Array<string>,
  caption?: string | Element, // try this if the other approach errors out React$Element
  thumbnail?: string,
};
