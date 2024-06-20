import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { searchPatientsReducer } from "@domain/patient-vaccination";

import { patientsApi } from "./api";

const rootReducer = combineReducers({
	[patientsApi.reducerPath]: patientsApi.reducer,
	search: searchPatientsReducer,
});

export const store = configureStore({
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(patientsApi.middleware);
	},

	reducer: rootReducer,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
