import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// module
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CoreModule } from './core/core.module';
// component
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
// service
import { OpenWeatherMapService } from './weather/open-weather-map.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [OpenWeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
