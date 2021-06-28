import { LOAD } from '../actions/actionType';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return {
        payLoad: {},
      };
    default:
      return state;
  }
}
