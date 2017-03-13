/* @flow */
import type { Member } from './member.type';

export type Sponsor = {|
  company: string,
  companyShortName: string,
  contacts: Array<Member>,
  logo?: ?string,
|};
