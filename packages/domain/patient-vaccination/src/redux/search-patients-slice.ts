import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@shared/redux";

import { createSlice } from "@reduxjs/toolkit";

type State = {
	search_string: string;
};

const initialState: State = {
	search_string: "",
};

const searchPatientsSlice = createSlice({
	initialState,
	name: "searchPatientsSlice",
	reducers: {
		searchStringUpdated: (state, action: PayloadAction<State["search_string"]>) => {
			state.search_string = action.payload;
		},
	},
});

export const { searchStringUpdated } = searchPatientsSlice.actions;

export const selectSearchString = (state: RootState) => {
	return state.search.search_string;
};

export default searchPatientsSlice.reducer;
