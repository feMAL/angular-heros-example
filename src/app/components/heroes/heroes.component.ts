import { Component, OnInit } from '@angular/core';
import { HeroesServicio, Heroe } from './heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroesServicio]
})
export class HeroesComponent implements OnInit {
  private listaHeroes:Heroe[];

  constructor(private _heroesServicio:HeroesServicio,
              private _routerNav:Router
    ) { 
    

  }

  ngOnInit() {

     this.listaHeroes =  this._heroesServicio.getHeroes();

  }

  gotoHero(idx:number){
    this._routerNav.navigate(['/heroe/',idx])
  }

}
