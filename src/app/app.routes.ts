import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
    { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'heroes', component:HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'search/:texto', component: SearchComponent}

    

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }