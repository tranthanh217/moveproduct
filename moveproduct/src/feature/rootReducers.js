import { combineReducers } from 'redux';
import inforDBReducers from './productImportData/productImportDataReducer';
import getListResultReducers from './listLink/listLinkResultReducer';

  const rootReducer = combineReducers({
    getInforDB : inforDBReducers,
    getLR : getListResultReducers
  });
  
  export default rootReducer;