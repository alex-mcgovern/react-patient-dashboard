import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type ListPatientResponse, type ListPatientsSearchParamsInput, schemas } from "./schema";

const buildPatientsUrl = (search?: ListPatientsSearchParamsInput) => {
	if (search) {
		const parsed = schemas.listPatientsSearchParams.parse(search);
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(parsed)) {
			if (!value || value.toString().length < 2) {
				continue;
			}
			params.append(key, value.toString());
		}

		return `patients?${params.toString()}`;
	}

	return `patients`;
};

export const patientsApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
	endpoints: (builder) => {
		return {
			listPatients: builder.query<
				ListPatientResponse,
				ListPatientsSearchParamsInput | undefined
			>({
				query: buildPatientsUrl,
				transformResponse: (response: ListPatientResponse) => {
					return schemas.listPatientsResponse.parse(response);
				},
			}),
		};
	},
	reducerPath: "patientsApi",
});

export const { useListPatientsQuery } = patientsApi;

if (import.meta.vitest) {
	const { expect, it } = import.meta.vitest;

	it("builds patients URL correctly", () => {
		// No search params

		expect(buildPatientsUrl()).toEqual("patients");

		// Single search param

		expect(buildPatientsUrl({ search: "test" })).toEqual("patients?search=test");

		// The date search param, as some transformation is happening

		expect(buildPatientsUrl({ vaccineDate: "2020-01-01T00:00:00Z" })).toEqual(
			"patients?vaccineDate=1577836800000",
		);

		// Multiple search params

		const url = buildPatientsUrl({ firstName: "John", search: "test" });
		const expected = "patients?firstName=John&search=test";
		expect(new URLSearchParams(url).toString()).toEqual(
			new URLSearchParams(expected).toString(),
		);
	});
}
