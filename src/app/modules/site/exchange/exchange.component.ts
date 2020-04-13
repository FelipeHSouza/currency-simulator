import { Component, OnInit, ViewChild } from '@angular/core';
import { CommomService } from 'src/app/core/services/commom.service';
import { Currency } from 'src/app/core/models/currency.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currency: Currency
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public commomService: CommomService
  ) { }

  ngOnInit(): void {
    this.currency = this.commomService.getAvailableCurrencies()
    console.log(this.currency)
  }
}
