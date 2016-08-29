import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import bands from './bands';

const rootReducer = combineReducers({bands, routing: routerReducer});

export default rootReducer;
