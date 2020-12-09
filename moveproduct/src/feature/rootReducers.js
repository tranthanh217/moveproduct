import { combineReducers } from 'redux';
import inforDBReducers from './productImportData/productImportDataReducer';

export default combineReducers({
    getInforDB : inforDBReducers
  });