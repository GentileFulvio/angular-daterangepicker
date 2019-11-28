import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CalendarComponent} from './containers/calendar/calendar.component';

@NgModule({
	declarations: [
		CalendarComponent
	],
	imports: [
		BrowserModule
	],
	exports: [CalendarComponent]
})
export class CalendarModule {}
