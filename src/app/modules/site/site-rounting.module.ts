import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { HomeCompponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
    { path: '', component: HomeCompponent },
    { path: 'home', component: HomeCompponent },
    { path: 'exchange', component: ExchangeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPrefix,
            multi: true
        }
    ]
})
export class SiteRoutingModule { }
