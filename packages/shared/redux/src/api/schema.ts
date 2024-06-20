import { z } from "zod";
const vaccineType = z.enum(["Pfizer", "AstraZeneca"]);

const patientSummary = z.object({
	firstName: z.string(),
	id: z.coerce.number(),
	lastName: z.string(),
	nhsNumber: z.coerce.number(),
	vaccineDate: z.number().transform((v) => {
		return new Date(v).toISOString();
	}),
	vaccineType: vaccineType,
});

const listPatientsResponse = z.array(patientSummary);

const listPatientsSearchParams = z.object({
	firstName: z.string().optional(),
	id: z.number().optional(),
	lastName: z.string().optional(),
	nhsNumber: z.number().optional(),
	search: z.string().optional(),
	vaccineDate: z
		.string()
		.datetime()
		.optional()
		.transform((v) => {
			if (v) {
				return new Date(v).getTime();
			}
		}),
	vaccineType: vaccineType.optional(),
});

export type PatientSummary = z.infer<typeof patientSummary>;
export type ListPatientResponse = z.infer<typeof listPatientsResponse>;
export type ListPatientsSearchParams = z.infer<typeof listPatientsSearchParams>;
export type ListPatientsSearchParamsInput = z.input<typeof listPatientsSearchParams>;

export const schemas = {
	listPatientsResponse,
	listPatientsSearchParams,
	patientSummary,
};
