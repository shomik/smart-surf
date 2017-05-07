import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { WeatherComponent } from './weather.component';

import { OpenWeatherMapService } from './open-weather-map.service';
import { GeoLocationService } from '../shared/geo-location.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
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
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
