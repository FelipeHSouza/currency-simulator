import { Component, OnInit } from '@angular/core';
import { ApiCurrencyService } from 'src/app/core/services/api-currency.service';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.scss']
})
export class CambioComponent implements OnInit {

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