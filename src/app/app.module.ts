import * as moment from 'moment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalendarModule} from 'projects/calendar/src/public-api';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CalendarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		moment.locale('nl');
	}
}
