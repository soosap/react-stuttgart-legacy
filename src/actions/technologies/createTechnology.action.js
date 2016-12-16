import { CREATE_TECHNOLOGY } from 'actions/types';

export default function (technology) {
  return { type: CREATE_TECHNOLOGY, technology };
}
