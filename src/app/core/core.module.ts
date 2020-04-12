import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from './interceptors/api-prefix.interceptor';

@NgModule({
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [],
    providers: [
      
    ],
    declarations: []
  })
  export class CoreModule { }
  