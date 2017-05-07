import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { OpenWeatherMapService } from './open-weather-map.service';

describe('OpenWeatherMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherMapService, Http]
    });
  });

  it('should ...', inject([OpenWeatherMapService], (service: OpenWeatherMapService) => {
    expect(service).toBeTruthy();
  }));
});
