import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import symptoms from './symptoms';
import diagnoses from './diagnoses';

const Reducers = combineReducers({
    symptoms,
    diagnoses,
    routing: routerReducer
});

export default Reducers;
