import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sidebarReducer from "./features/sidebarSlice";
// import productReducer from "./features/productSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";


// const rootReducer = combineReducers({
//   sidebar: sidebarReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,s
// });

// export const configureReduxStore = (passedStorage) => {
//   const combinedReducers = combineReducers({
//     sidebar: sidebarReducer,
//   });
//   if (!passedStorage) {
//     const store = configureStore({
//       reducer: combineReducers,
//     });
//     return { store };
//   }

//   const persistConfig = {
//     key: "root",
//     storage: passedStorage,
//   };
//   const persistedReducer = persistReducer(persistConfig, combinedReducers);

//   const store = configureStore({
//     reducer: persistedReducer,
//   });
//   const persistor = persistStore(store);
//   return { store, persistor };
// };

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

const combinedReducers = combineReducers({
  sidebar: sidebarReducer,
//  product: productSlice
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
