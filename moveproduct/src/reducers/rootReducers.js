    // reducers/rootReducers.js
    import { combineReducers } from 'redux';
    import todosReducers from './moveDataReducers';

    const rootReducer = combineReducers({
        todosReducers
    });

    export default rootReducer;