import { ADD_TODO } from '../actions/actionType';
const initialState = {
    keyword:'',
    datafirst:'',
    datasecond:'',
    tax:[]
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return({keyword: action.payload.keyword,
                datafirst:action.payload.datafirst,
                datasecond:action.payload.datasecond,
                tax:action.payload.tax
              });
      default:
        return state;
    }
  }
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