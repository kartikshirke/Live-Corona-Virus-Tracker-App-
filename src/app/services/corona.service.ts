import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    const url="https://covid19.mathdro.id/api/countries"
    return this.http.get<any>(url)
  }

  getCoronaRealtimeData(country):Observable<any>{
    // const url ="https://covid19.mathdro.id/api/countries/[country]"
    const url="https://covid19.mathdro.id/api/countries/" + country
    return this.http.get<any>(url)
  }

  getWorldData():Observable<any>{
    const url="https://covid19.mathdro.id/api/"
    return this.http.get<any>(url)
  }
}
