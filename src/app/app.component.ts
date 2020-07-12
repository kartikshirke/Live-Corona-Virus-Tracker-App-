import { Component } from '@angular/core';
import { CoronaService } from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  worldConfirmed: number
  worldRecovered: number
  worldDeaths: number
  countries: any
  country: any
  confirmed: Number
  recovered: Number
  deaths: Number
  date:any

  constructor(private corona: CoronaService) { }

  ngOnInit() {
    this.date=new Date();
    this.corona.getCountries().subscribe((data) => {
      this.countries = data.countries
    })

    this.corona.getWorldData().subscribe((data) => {
      this.worldConfirmed = data.confirmed.value;
      this.worldRecovered = data.recovered.value
      this.worldDeaths = data.deaths.value
    })
  }

  getCountry(country: any) {
    this.country = country;
    this.corona.getCoronaRealtimeData(this.country).subscribe((data) => {
      this.confirmed = data.confirmed.value
      this.recovered = data.recovered.value
      this.deaths = data.deaths.value
    })
  }

}
