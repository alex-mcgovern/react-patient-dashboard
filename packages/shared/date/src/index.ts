export const formatDateTime = (date?: string) => {
	return date
		? new Date(date).toLocaleDateString("en-GB", {
				day: "2-digit",
				hour: "2-digit",
				hourCycle: "h23",
				minute: "2-digit",
				month: "2-digit",
				year: "2-digit",
			})
		: undefined;
};
