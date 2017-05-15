/* @flow */
import type { Technology } from './technology';
import type { Member } from './member';

export type Talk = {
  id: string,
  title: string,
  description: string,
  length?: string,
  technology: Technology,
  speakers: Array<Member>
};
