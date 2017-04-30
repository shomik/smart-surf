import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OpenWeatherMapService } from './open-weather-map.service';
import { WeatherResponse } from './weather-response';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = 'Plano, US';
  weatherResponse: WeatherResponse;
  iconUrls: string[];

  constructor(private weatherService: OpenWeatherMapService) { }

  ngOnInit() {
    this.weatherService.getWeatherByQuery(this.city).subscribe(
      success => {
        this.weatherResponse = success;
        this.iconUrls = this.getImageUrls();
        console.log(this.iconUrls);
      },
      error => console.log(error)
    );
  }

  getImageUrls(): string[] {
    return this.weatherResponse.weather.map(w => 
      this.weatherService.getIconUrl(w.icon)
    );
  }

}
