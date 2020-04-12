import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from 'src/app/core/interceptors/api-prefix.interceptor';
import { CambioComponent } from './pages/cambio/cambio.component';

const routes: Routes = [{
    path: 'cambio', component: CambioComponent
}];

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
