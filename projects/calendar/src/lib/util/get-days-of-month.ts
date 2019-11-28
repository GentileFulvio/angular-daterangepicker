import * as moment from 'moment';

export const getDaysOfMonth = (month: string): string[][] => {
	const monthMoment = moment(month, 'YYYY-MM');

	const dayOfTheWeek = monthMoment.clone().startOf('month').get('day');
	const currentDay = monthMoment.clone().subtract(dayOfTheWeek - 1, 'days');

	const result: string[][] = [];

	for (let i = 0; i <= 6; i++) {
		const days: string[] = [];

		for (let j = 0; j <= 6; j++) {
			days.push(currentDay.format('YYYY-MM-DD'));
			currentDay.add(1, 'day');
		}

		result.push(days);
	}

	return result;
};
