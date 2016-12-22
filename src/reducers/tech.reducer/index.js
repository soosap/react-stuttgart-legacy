import { ADD_TECHNOLOGY } from 'actions/types';

const initialState = {
  stack: [
    {
      title: 'React',
    },
    {
      title: 'Redux',
    },
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TECHNOLOGY:
      return Object.assign({}, state, { stack: [...state.stack, action.payload] });
    default:
      return state;
  }
}
