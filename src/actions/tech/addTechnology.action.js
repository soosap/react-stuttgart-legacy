import { ADD_TECHNOLOGY } from 'actions/types';

export default function addTechnology(technology) {
  return { type: ADD_TECHNOLOGY, payload: technology };
}
