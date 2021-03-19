import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SwiperModule} from 'swiper/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {HomeComponent} from './components/pages/home/home.component';
import {UpComingEventsComponent} from './components/events/up-coming-events/up-coming-events.component';
import {TopEventsComponent} from './components/events/top-events/top-events.component';
import {EventsComponent} from './components/events/events.component';
import {TestimonyComponent} from './components/pages/home/testimony/testimony.component';
import {SignInComponent} from './dialogs/sign-in/sign-in.component';
import {SignUpComponent} from './dialogs/sign-up/sign-up.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { StatisticsComponent } from './components/pages/home/statistics/statistics.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './modules/material/material.module';
import { CButtonComponent } from './components/shared/c-button/c-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UpComingEventsComponent,
    TopEventsComponent,
    EventsComponent,
    TestimonyComponent,
    SignInComponent,
    SignUpComponent,
    StatisticsComponent,
    CButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SwiperModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
