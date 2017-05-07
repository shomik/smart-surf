import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WeatherResponse } from './weather-response';

@Injectable()
export class OpenWeatherMapService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5';
  private apiKey = '77a8e7d0fbf79638d1288df08727f45e';
  private unitParam = 'units=imperial';
  private baseIconUrl = 'http://openweathermap.org/img/w';

  constructor(private http: Http) { }

  getWeatherByQuery(query: string): Observable<WeatherResponse> {
    // const url = `${this.baseUrl}/weather?q=${query}&appid=${this.apiKey}&${this.unitParam}`;
    const url = './mock-service-response/plano-weather.json';
    console.log(url);
    return this.http.get(url)
                    .map(response => response.json());
  }

  getIconUrl(code: string): string {
    return `${this.baseIconUrl}/${code}.png`;
  }

  getWeatherByLatLon(lat: number, lon: number): Observable<WeatherResponse> {
    const url = `${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&${this.unitParam}`;
    return this.http.get(url)
                    .map(response => response.json());
  }

}
