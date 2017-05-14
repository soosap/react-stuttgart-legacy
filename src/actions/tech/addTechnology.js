import { ADD_TECHNOLOGY } from '../types';

function addTechnology(technology) {
  return { type: ADD_TECHNOLOGY, payload: technology };
}

export default addTechnology;
