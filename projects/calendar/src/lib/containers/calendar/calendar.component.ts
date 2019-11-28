import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {getDaysOfMonth, getWeekdays} from '../../util';

@Component({
	selector: 'lib-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
	@Input() month: string;
	weekdays: string[] = getWeekdays();
	weeks: string[][];

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.month && typeof changes.month.currentValue === 'string') {
			this.weeks = getDaysOfMonth(changes.month.currentValue);
		}
	}
}
