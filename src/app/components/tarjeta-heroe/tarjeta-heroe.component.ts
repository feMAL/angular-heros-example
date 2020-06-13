import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesServicio } from '../heroes/heroes.service';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent implements OnInit {

  @Input() f:any = {};
  @Input() index:number;

  constructor(private _routerNav: Router,
              private _heroeServicio: HeroesServicio
  ) { }

  ngOnInit() {
  }

  gotoHero=()=>{
    console.log(this.index)
    this._routerNav.navigate(['/heroe/',this.index])

  }

  gotoSearchHero(){
    let heroes = this._heroeServicio.getHeroes()
    this._routerNav.navigate(['/heroe/',heroes.indexOf(this.f)])
  }
}
