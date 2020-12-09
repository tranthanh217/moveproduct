import { ADD_TODO } from '../../actions/actionType';
export const addTodo = (e) => {
  let listTax = [];
  const product_cat = (e.product_cat) ? "product_cat" : '';
  const product_tag = (e.product_tag) ? "product_tag" : '';
  const collection = (e.collection) ? "collection" : '';
  if(product_cat !== ''){listTax.push(product_cat);}
  if(product_tag !== ''){listTax.push(product_tag);}
  if(collection !== ''){listTax.push(collection);}
  return {
      type: ADD_TODO,
      payload: {
        keyword:e.keyword,
        datafirst:e.database_first,
        datasecond:e.database_second,
        tax:listTax
      }
  }
};
