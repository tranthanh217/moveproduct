import { ADD_TODO } from './actionType';
export const addTodo = e => {
  return {
      type: ADD_TODO,
      payload: {
        id:'',
        keyword:e.keyword,
        data1:'',
        data2:'',
        tax:{}
      }
  }
};


// export const createPost = title => ({
//   type: ADD_POST,
//   payload: {
//     id: uuidv4(),
//     title
//   }
// });