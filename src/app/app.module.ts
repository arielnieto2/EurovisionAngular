import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

//Routes
import {APP_ROUTING} from './app.routes';

//Services
import {CitiesService} from './services/cities.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CitiesComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    CommonModule,
    APP_ROUTING,
    BrowserAnimationsModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
