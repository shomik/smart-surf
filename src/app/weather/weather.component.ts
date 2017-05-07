import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GeoLocationService } from '../shared/geo-location.service';
import { OpenWeatherMapService } from './open-weather-map.service';

import { WeatherResponse } from './weather-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  weatherResponse: WeatherResponse;

  constructor(private weatherService: OpenWeatherMapService, private geoLocationService: GeoLocationService) { }

  ngOnInit() {
    const opts = {
      enableHighAccuracy: true, 
      maximumAge        : 30000, 
      timeout           : 27000
    };
    this.geoLocationService.getLocation(opts).subscribe(
      success => {
        console.log(success.coords);
        this.weatherService.getWeatherByLatLon(success.coords.latitude, success.coords.longitude).subscribe(
          weather => {
            console.log(weather);
            this.city = weather.name;
            this.weatherResponse = weather;
            this.changeImageUrls();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
    // this.weatherService.getWeatherByQuery(this.city).subscribe(
    //   success => {
    //     this.weatherResponse = success;
    //     this.changeImageUrls();
    //   },
    //   error => console.log(error)
    // );
  }

  changeImageUrls(): void {
    this.weatherResponse.weather.map(w => 
      w.icon = this.weatherService.getIconUrl(w.icon)
    );
  }

}
