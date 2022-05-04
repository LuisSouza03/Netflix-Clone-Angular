// Padrão
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Api Tmdb
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TmdbService } from './services/tmdb.service';

// Component
import { HeaderNetflixComponent } from './header-netflix/header-netflix.component';

// Módulos
import { HeaderNetflixModule } from './header-netflix/header-netflix.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNetflixComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderNetflixModule
  ],
  providers: [TmdbService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
