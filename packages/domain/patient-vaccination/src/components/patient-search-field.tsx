import { Group, Input, SearchField, SearchFieldClearButton, SearchFieldIcon } from "boondoggle";
import { useDispatch, useSelector } from "react-redux";

import { searchStringUpdated, selectSearchParams } from "../redux/search-patients-slice";

export function PatientSearchField({ className }: { className: string }) {
	const dispatch = useDispatch();

	const { search } = useSelector(selectSearchParams);

	return (
		<SearchField
			className={className}
			onChange={(v) => {
				dispatch(searchStringUpdated(v));
			}}
			style={{ maxWidth: 182 }} // Don't normally use inline styles, but this is a one-off
			value={search}
		>
			<Group>
				<Input icon={<SearchFieldIcon />} placeholder="Search for a patient" unstyled />
				<SearchFieldClearButton />
			</Group>
		</SearchField>
	);
}
