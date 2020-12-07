import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import orderReducer from './persistConfig'

const middleware = [thunk];

export const store = createStore(
	orderReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };