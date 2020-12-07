import { ADD_TODO } from '../actions/actionType';
const initialState = {
    id:'',
    keyword:'',
    data1:'',
    data2:'',
    tax:{}
  };
  // export default (state = initialState, action) => {
  //   console.log(action);
  //   switch (action.type){
  //     case ADD_TODO:
  //       return 
  //       console.log(action.type);
  //           // [...state, action.payload];

  //     default:
  //       return state;
  //   }   
  // };

  export default function postReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
      case ADD_TODO:
        // return [...state, action.payload];
        break;
      default:
        return state;
    }
  }