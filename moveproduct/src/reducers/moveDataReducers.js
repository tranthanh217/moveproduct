import { ADD_TODO } from '../actions/actionMoveData';
const initialState = {
    id:'',
    keyword:'',
    data1:'',
    data2:'',
    tax:{}
  };
  export default (state = initialState, action) => {
    switch (action.type){
      case ADD_TODO:
        return 
            [...state, action.payload];
      default:
        return state;
    }   
  };