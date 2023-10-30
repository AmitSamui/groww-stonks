import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sidebarReducer from "./features/sidebarSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

/**
 *
 * @returns noop storage for server side to persist data
 */
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "settings",
  storage,
};

/**
 * combines all the reducers (here one, can be written seperated)
 */
const combinedReducers = combineReducers({
  sidebar: sidebarReducer,
});

/**
 * configure the persist reducer
 */
const persistedReducer = persistReducer(persistConfig, combinedReducers);

/**
 * create and configure store
 */
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
