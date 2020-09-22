import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './reducer';
import createLogger from 'redux-logger';
const logger = createLogger;
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}
const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer, applyMiddleware(logger))
let persistor = persistStore(store)
export { store, persistor }