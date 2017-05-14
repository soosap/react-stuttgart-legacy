/* @flow */
import type { Member } from './member';

export type Sponsor = {|
  id: string,
  company: string,
  companyShortName: string,
  contacts: Array<Member>,
  logo?: ?string,
|};
