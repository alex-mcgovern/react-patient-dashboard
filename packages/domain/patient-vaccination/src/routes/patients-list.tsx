import { App, Table } from "boondoggle";
import { useSelector } from "react-redux";

import { FullScreenLoader } from "@shared/components";
import { formatDateTime } from "@shared/date";
import { useListVaccinePatientsQuery } from "@shared/redux";
import { capitalize } from "@shared/utils";

import { PatientSearchField } from "../components/patient-search-field";
import { selectSearchString } from "../redux/search-patients-slice";

export function PatientVaccinationsList() {
	const search_string = useSelector(selectSearchString);

	const { data, error, isLoading } = useListVaccinePatientsQuery({ search: search_string }, {});

	if (isLoading) {
		return <FullScreenLoader />;
	}

	if (error) {
		throw error;
	}

	return (
		<>
			<App.Main.Header>
				<h1>Patients</h1>
				<PatientSearchField className="ml-auto" />
			</App.Main.Header>
			<App.Main.Content>
				<Table.ResizableContainer>
					<Table.Root aria-label="Pokemon table">
						<Table.Header>
							<Table.Row>
								<Table.Column sticky width={20}>
									ID
								</Table.Column>
								<Table.Column isRowHeader sticky width="6fr">
									First name
								</Table.Column>
								<Table.Column sticky width="3fr">
									Last name
								</Table.Column>
								<Table.Column sticky width="3fr">
									Vaccine date
								</Table.Column>
								<Table.Column sticky width="3fr">
									Vaccine type
								</Table.Column>
								<Table.Column sticky width="3fr">
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
			</App.Main.Content>
		</>
	);
}
