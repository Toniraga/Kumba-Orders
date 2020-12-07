import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderReducer } from "./orders/orders.reducer";


const persistConfig = {
	key: "root",
	storage,
};

export default persistReducer(persistConfig, orderReducer);