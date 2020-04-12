import { Component, OnInit } from '@angular/core';
import { ApiCurrencyService } from 'src/app/core/services/api-currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeCompponent implements OnInit {

  constructor(
    public apiCurrency: ApiCurrencyService
  ) { }

  ngOnInit(): void {
    this.getCurrencyRates()
  }

  getCurrencyRates(): void{
    this.apiCurrency.getCurrencyRates().subscribe(
      res => {
        console.log(res)
      }
    )
  }
}