import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule} from '@angular/forms';
import { ArtikelServiceService } from "./artikel-service.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SenasteComponent } from './senaste/senaste.component';
import { AllaComponent } from './alla/alla.component';
import { NyArtikelComponent } from './ny-artikel/ny-artikel.component';
import { LoggaInComponent } from './logga-in/logga-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StartsidaComponent,
    SenasteComponent,
    AllaComponent,
    NyArtikelComponent,
    LoggaInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArtikelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
