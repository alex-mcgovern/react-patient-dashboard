import { z } from "zod";
const vaccineType = z.enum(["Pfizer", "AstraZeneca"]);

const vaccinePatientSummary = z.object({
	firstName: z.string(),
	id: z.coerce.number(),
	lastName: z.string(),
	nhsNumber: z.coerce.number(),
	vaccineDate: z.number().transform((v) => {
		return new Date(v).toISOString();
	}),
	vaccineType: vaccineType,
});

const listVaccinePatientsResponse = z.array(vaccinePatientSummary);

const listVaccinePatientsSearchParams = z.object({
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

export type VaccinePatientSummary = z.infer<typeof vaccinePatientSummary>;
export type ListVaccinePatientResponse = z.infer<typeof listVaccinePatientsResponse>;
export type ListVaccinePatientsSearchParams = z.input<typeof listVaccinePatientsSearchParams>;

export const schemas = {
	listVaccinePatientsResponse,
	listVaccinePatientsSearchParams,
	vaccinePatientSummary,
};
