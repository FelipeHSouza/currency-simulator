import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Cambio } from '../models/cambio.model';
import { CurrencyResponse } from '../models/currency.response.model';


@Injectable({
  providedIn: 'root'
})

export class ApiCurrencyService {
  cambio: Cambio
  base: string = 'USD'

  constructor(private http: HttpClient) { }

  //https://api.exchangeratesapi.io/latest?symbols=BRL&base=USD
  convertCurrency(fromCurrency: string, toCurrecncy: string): Observable<CurrencyResponse>{
    return this.http.get<CurrencyResponse>(
      `${environment.currencyEndpoint}/lates/?symbols=${fromCurrency}&base=${toCurrecncy}`
    )
  }

  //https://api.exchangeratesapi.io/latest?base=USD
  getCurrencyRates(): Observable<CurrencyResponse>{
    return this.http.get<CurrencyResponse>(
      `${environment.currencyEndpoint}/latest?base=${this.base}`
    )
  }

  //https://api.exchangeratesapi.io/2010-01-12
  getHistoricalRatesSince(historicalDate: string): Observable<CurrencyResponse>{
    return this.http.get<CurrencyResponse>(
      `${environment.currencyEndpoint}/${historicalDate}`
    )
  }

  //https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD
  getHistoricalRatesPeriod(fromDate: string, toDate: string): Observable<CurrencyResponse>{
    return this.http.get<CurrencyResponse>(
      `${environment.currencyEndpoint}/history/start_at=${fromDate}&end_at=${toDate}&base=${this.base}`
    )
  }
}
