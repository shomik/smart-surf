import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { OpenWeatherMapService } from './open-weather-map.service';

describe('OpenWeatherMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [OpenWeatherMapService]
    });
  });

  it('should ...', inject([OpenWeatherMapService], (service: OpenWeatherMapService) => {
    expect(service).toBeTruthy();
  }));
});
