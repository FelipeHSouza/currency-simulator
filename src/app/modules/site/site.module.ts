import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { HomeCompponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeCompponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule
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