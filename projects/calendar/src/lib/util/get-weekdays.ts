import * as moment from 'moment';

export const getWeekdays = (): string[] => {
	return moment.weekdaysShort(true);
};
