
import { NetflixComponent } from './netflix/netflix/netflix.component';
// Padrão
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Api Tmdb
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TmdbService } from './services/tmdb.service';

// Component
import { HeaderNetflixComponent } from './netflix/header-netflix/header-netflix.component';

// Módulos
import { HeaderNetflixModule } from './netflix/header-netflix/header-netflix.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNetflixComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    NetflixComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderNetflixModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [TmdbService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
