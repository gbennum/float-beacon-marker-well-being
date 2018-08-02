import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import symptoms from './symptoms';
import diagnoses from './diagnoses';

const Reducers = combineReducers({
    demo,
    symptoms,
    diagnoses,
    routing: routerReducer
});

export default Reducers;
