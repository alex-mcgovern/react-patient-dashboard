import type { PayloadAction } from "@reduxjs/toolkit";

import type { ListPatientsSearchParamsInput, RootState } from "@shared/redux";

import { createSlice } from "@reduxjs/toolkit";

type State = {
	search_params: ListPatientsSearchParamsInput;
};

const initialState: State = {
	search_params: { search: "" },
};

const searchPatientsSlice = createSlice({
	initialState,
	name: "searchPatientsSlice",
	reducers: {
		searchStringUpdated: (state, action: PayloadAction<State["search_params"]["search"]>) => {
			state.search_params = { ...state.search_params, search: action.payload };
		},
	},
});

export const { searchStringUpdated } = searchPatientsSlice.actions;

export const selectSearchParams = (state: RootState) => {
	return state.search.search_params;
};

export default searchPatientsSlice.reducer;
