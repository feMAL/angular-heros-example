import { Component, OnInit } from '@angular/core';
import { HeroesServicio, Heroe } from '../heroes/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  public heroes: Heroe[] = [];
  public heroesEncontrados:Heroe[] = [];
  public textoBusqueda:string;

  constructor(private _heroeServicio:HeroesServicio,
              private _rutaActiva:ActivatedRoute,
              private _routerNav: Router) {
               }

  ngOnInit() {
    this.busqueda()
  }
   busqueda(){
    this._rutaActiva.params.subscribe(respuesta=>{
      this.textoBusqueda=respuesta['texto']
      this.heroesEncontrados = this._heroeServicio.searchHeroe(this.textoBusqueda)    
    });
  }
  gotoHero(hero:Heroe){
    this.heroes = this._heroeServicio.getHeroes()
    this._routerNav.navigate(['/heroe/',this.heroes.indexOf(hero)])
  }


}
