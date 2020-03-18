import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { StartsidaComponent } from '../startsida/startsida.component';
import { SenasteComponent } from '../senaste/senaste.component';
import { AllaComponent } from '../alla/alla.component';
import { NyArtikelComponent } from '../ny-artikel/ny-artikel.component';
import { LoggaInComponent } from '../logga-in/logga-in.component';

const routes: Routes = [
    { path: '', redirectTo: "/startsida", pathMatch: "full" },
    { path: "startsida", component: StartsidaComponent, pathMatch: "full" },
    { path: "senaste", component: SenasteComponent, pathMatch: "full" },
    { path: "alla", component: AllaComponent, pathMatch: "full" },
    { path: "logga-in", component: LoggaInComponent, pathMatch: "full" },
    { path: "ny-artikel", component: NyArtikelComponent, pathMatch: "full" },
    { path: "**", component: StartsidaComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }