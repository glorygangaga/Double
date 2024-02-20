import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as BusketReducer} from './busket/basket.slice';
import {reducer as BoughtReducer} from './bought/bought.slice';
import {api} from './api/pizza.api';

const reducers = combineReducers({
  "basket": BusketReducer,
  "bought":BoughtReducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;