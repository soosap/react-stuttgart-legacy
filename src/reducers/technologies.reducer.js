import { CREATE_TECHNOLOGY } from 'actions/types';

const initialState = [
  {
    title: 'React',
  },
  {
    title: 'Redux',
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_TECHNOLOGY:
      return [...state, Object.assign({}, action.technology)];
    default:
      return state;
  }
}
