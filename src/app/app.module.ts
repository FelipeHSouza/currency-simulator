import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SiteRoutingModule } from './modules/site/site-rounting.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiPrefix } from './core/interceptors/api-prefix.interceptor';
import { SiteModule } from './modules/site/site.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './modules/angular-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SiteRoutingModule,
    CoreModule,
    SiteModule,
    SharedModule,
    AngularMaterialModule,
    BrowserAnimationsModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
