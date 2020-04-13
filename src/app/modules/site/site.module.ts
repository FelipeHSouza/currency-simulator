import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { HomeCompponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HomeCompponent,
    ExchangeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefix,
      multi: true
    }
  ],
  bootstrap: []
})

export class SiteModule { }