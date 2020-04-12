import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteRoutingModule } from './site-rounting.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { CambioComponent } from './pages/cambio/cambio.component';

@NgModule({
  declarations: [
    CambioComponent
  ],
  imports: [
    BrowserModule,
    SiteRoutingModule
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