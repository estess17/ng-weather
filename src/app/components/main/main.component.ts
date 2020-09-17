import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  inputValue = '';
  weatherData: any = [];
  localStorageData: any = [];

  constructor(private request: RequestService) { }

  ngOnInit(): void {
  }

  onAdd(): any {
    this.request.addWeatherByCity(this.inputValue).subscribe(data => {
      this.weatherData.push(data);
    });

    this.inputValue = '';
  }

  removeCity(cityId): any {
    this.weatherData = this.weatherData.filter(item => item.id !== cityId);
  }

  onSave(item): any {
    if ( JSON.parse(localStorage.getItem('cities')) ) {
      this.localStorageData = JSON.parse(localStorage.getItem('cities'));
    }

    this.localStorageData.push(item);
    localStorage.setItem('cities', JSON.stringify(this.localStorageData));
  }

  loadStorage(): any {
    this.weatherData = JSON.parse(localStorage.getItem('cities'))
      ? JSON.parse(localStorage.getItem('cities')) : [];
  }

  clearStorage(): any {
    localStorage.clear();
  }
}
