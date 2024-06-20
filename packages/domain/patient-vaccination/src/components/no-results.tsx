import { Button } from "boondoggle";
import { useDispatch, useSelector } from "react-redux";

import { searchStringUpdated, selectSearchParams } from "../redux/search-patients-slice";

import "../css/index.css";

export function NoResults() {
	const dispatch = useDispatch();
	const { search } = useSelector(selectSearchParams);

	return (
		<div className="no-results-container">
			<h3>No results</h3>
			<p>Sorry, but there are no results found.</p>
			<p>
				You searched for <strong>&quot;{search}&quot;</strong>
			</p>
			<Button
				onPress={() => {
					return dispatch(searchStringUpdated(""));
				}}
			>
				Clear search
			</Button>
		</div>
	);
}
