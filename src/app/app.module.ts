import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TerenuriComponent } from './terenuri/terenuri.component';
import { HttpClientModule } from '@angular/common/http';
import { TerenSelectatComponent } from './teren-selectat/teren-selectat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TerenuriComponent,
    TerenSelectatComponent,
    CalendarComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ],
  entryComponents: [ModalContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
