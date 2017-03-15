/* @flow */
import type { Technology } from './technology.type';
import type { Member } from './member.type';

export type Talk = {|
  id: string,
  title: string,
  description: string,
  length?: string,
  technology: Technology,
  speakers: Array<Member>
|};
