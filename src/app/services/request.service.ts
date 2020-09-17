import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiKey = '237971df8b2cab0c5f087225d32598d4';

  constructor(private http: HttpClient) { }

  public addWeatherByCity(cityName): any {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`);
  }
}
