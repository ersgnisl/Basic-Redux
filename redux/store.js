import {createStore,combineReducers} from "redux";
import numberReducer from "./reducers/NumberReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

 const persistConfig = {
    key : 'root',
     storage: AsyncStorage
 }

const reducers = combineReducers({counter : numberReducer});
const persistedReducer = persistReducer(persistConfig,reducers);
const store = createStore(reducers);

//export default {store,persistor};

 export default () => {
     let store = createStore(persistedReducer)
     let persistor = persistStore(store)
     return {store,persistor}
 }

//export default store;
