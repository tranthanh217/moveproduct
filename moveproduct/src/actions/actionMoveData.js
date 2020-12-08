import { ADD_TODO } from './actionType';
export const addTodo = (e) => {
  let listTax = [];
   if(e.formData.product_cat !== undefined){
    listTax.push(e.formData.product_cat);
   }
   if(e.formData.product_tag !== undefined){
    listTax.push(e.formData.product_tag);
   }
   if(e.formData.collection !== undefined){
    listTax.push(e.formData.collection);
   }
  return {
      type: ADD_TODO,
      payload: {
        keyword:e.formData.keyword,
        datafirst:e.formData.database_first,
        datasecond:e.formData.database_second,
        tax:listTax
      }
  }
};
