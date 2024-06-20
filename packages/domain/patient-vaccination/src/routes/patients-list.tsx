import type { ListPatientsSearchParamsInput, PatientSummary } from "@shared/redux";
import type { ExhaustiveArray } from "@shared/utils";

import { useState } from "react";

import { App, Table } from "boondoggle";
// eslint-disable-next-line no-restricted-imports -- Usually discourage direct import from `react-aria-components` but need it here
import { type SortDescriptor } from "react-aria-components";
import { useSelector } from "react-redux";

import { FullScreenLoader } from "@shared/components";
import { formatDateTime } from "@shared/date";
import { patientsApi, useAppDispatch, useListPatientsQuery } from "@shared/redux";
import { capitalize } from "@shared/utils";

import { NoResults } from "../components/no-results";
import { PatientSearchField } from "../components/patient-search-field";
import { selectSearchParams } from "../redux/search-patients-slice";

const isPatientKey = (key: string): key is keyof PatientSummary => {
	return (
		[
			"id",
			"firstName",
			"lastName",
			"vaccineDate",
			"vaccineType",
			"nhsNumber",
		] satisfies ExhaustiveArray<keyof PatientSummary>
	).includes(key as keyof PatientSummary);
};

const sort = (
	dispatch: ReturnType<typeof useAppDispatch>,
	search_params: ListPatientsSearchParamsInput,
	column: keyof PatientSummary,
	direction: "ascending" | "descending",
) => {
	return dispatch(
		patientsApi.util.updateQueryData("listPatients", search_params, (patients) => {
			const sorted = [...patients].sort((a, b) => {
				return direction === "ascending"
					? a[column]
							.toString()
							.toLowerCase()
							.localeCompare(b[column].toString().toLowerCase())
					: b[column]
							.toString()
							.toLowerCase()
							.localeCompare(a[column].toString().toLowerCase());
			});
			return sorted;
		}),
	);
};

const useSort = () => {
	const [sort_descriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: undefined,
		direction: undefined,
	});

	const dispatch = useAppDispatch();
	const search_params = useSelector(selectSearchParams);

	const handleSort = (column: keyof PatientSummary, direction: "ascending" | "descending") => {
		setSortDescriptor({ column, direction });
		sort(dispatch, search_params, column, direction);
	};

	return {
		sort: handleSort,
		sort_descriptor,
	};
};

export function PatientVaccinationsList() {
	const { search } = useSelector(selectSearchParams);

	const { data, error, isLoading } = useListPatientsQuery({ search }, {});

	const { sort, sort_descriptor } = useSort();

	if (isLoading) {
		return <FullScreenLoader />;
	}

	const is_no_results = error && "status" in error && error.status === 404;

	if (error && !is_no_results) {
		throw error;
	}

	return (
		<>
			<App.Main.Header>
				<h1>Patients</h1>
				<PatientSearchField className="ml-auto" />
			</App.Main.Header>
			<App.Main.Content>
				{is_no_results ? (
					<NoResults />
				) : (
					<Table.ResizableContainer>
						<Table.Root
							aria-label="Patients table"
							onSortChange={({ column, direction }) => {
								const column_key = column?.toString();
								if (direction && column_key && isPatientKey(column_key)) {
									sort(column_key, direction);
								}
							}}
							sortDescriptor={sort_descriptor}
						>
							<Table.Header>
								<Table.Row>
									<Table.Column allowsSorting id="id" sticky width={20}>
										ID
									</Table.Column>
									<Table.Column allowsSorting id="firstName" isRowHeader sticky>
										First name
									</Table.Column>
									<Table.Column allowsSorting id="lastName" sticky>
										Last name
									</Table.Column>
									<Table.Column allowsSorting id="vaccineDate" sticky>
										Vaccine date
									</Table.Column>
									<Table.Column allowsSorting id="vaccineType" sticky>
										Vaccine type
									</Table.Column>
									<Table.Column allowsSorting id="nhsNumber" sticky>
										NHS number
									</Table.Column>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{data?.map((t) => {
									return (
										<Table.Row key={t.id}>
											<Table.Cell>{t.id}</Table.Cell>
											<Table.Cell>{capitalize(t.firstName)}</Table.Cell>
											<Table.Cell>{capitalize(t.lastName)}</Table.Cell>
											<Table.Cell>{formatDateTime(t.vaccineDate)}</Table.Cell>
											<Table.Cell>{t.vaccineType}</Table.Cell>
											<Table.Cell>{t.nhsNumber}</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table.Root>
					</Table.ResizableContainer>
				)}
			</App.Main.Content>
		</>
	);
}
