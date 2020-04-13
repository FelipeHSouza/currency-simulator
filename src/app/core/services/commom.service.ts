import { Injectable } from '@angular/core';
import *  as  data from 'src/app/core/mock/availableCurrencies.json';
import { Currency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CommomService {
  currency: Currency

  constructor(
  ) { }

  public getAvailableCurrencies(): Currency {
    this.currency = data.default;
    // console.log(this.currency)
    return this.currency;
  }
}