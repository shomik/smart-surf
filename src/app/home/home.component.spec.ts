import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { WeatherComponent } from '../weather/weather.component';

import { OpenWeatherMapService } from '../weather/open-weather-map.service';
import { GeoLocationService } from '../shared/geo-location.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        WeatherComponent
      ],
      imports: [
        MaterialModule.forRoot()
      ],
      providers: [
        OpenWeatherMapService,
        GeoLocationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
