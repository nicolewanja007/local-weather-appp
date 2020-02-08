import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { userInfo } from 'os';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current: ICurrentWeather
contructer() {
    this. current = {
    city:'andover',
      contry: 'us'
      date: 1486789600,
      image: '',
      temperature: 50,
      descripation: sunny
      as ICurrentWeather



    }
  }
ngOnInit(): void {
  }

}
