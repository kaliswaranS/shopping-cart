import { combineReducers } from 'redux';

import { reducer as shoppingCartReducer } from './shopping-cart';

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
});

function indexReducer(state, action) {
    return rootReducer(state, action);
}

export default indexReducer;
