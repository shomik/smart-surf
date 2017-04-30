import { Weather } from './weather';
import { MainWeather } from './main-weather';

export class WeatherResponse {
    id: number;
    name: string;
    main: MainWeather;
    weather: Weather[];
}
