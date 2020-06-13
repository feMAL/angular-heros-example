import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesServicio } from './components/heroes/heroes.service';
import { SearchComponent } from './components/search/search.component';
import { TarjetaHeroeComponent } from './components/tarjeta-heroe/tarjeta-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    TarjetaHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesServicio,
    SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
