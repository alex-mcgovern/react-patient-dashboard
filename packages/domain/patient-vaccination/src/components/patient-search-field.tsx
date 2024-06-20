import { Input, SearchField, SearchFieldIcon } from "boondoggle";
import { useDispatch, useSelector } from "react-redux";

import { searchStringUpdated, selectSearchString } from "../redux/search-patients-slice";

export function PatientSearchField({ className }: { className: string }) {
	const dispatch = useDispatch();

	const search_string = useSelector(selectSearchString);

	return (
		<SearchField
			className={className}
			onChange={(v) => {
				dispatch(searchStringUpdated(v));
			}}
			value={search_string}
		>
			<Input icon={<SearchFieldIcon />} placeholder="Search for a patient" />
		</SearchField>
	);
}
