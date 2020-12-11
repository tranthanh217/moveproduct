import { GET_RESULT } from "../../actions/actionType";
const initialState = {
  listResult: [],
};
export default function getListResultReducers(state = initialState, action) {
  switch (action.type) {
    case GET_RESULT:
      console.log(action.payload);
      return { listResult: action.payload };
    default:
      return state;
  }
}
