import { Component, OnInit } from '@angular/core';
import { HeroesServicio } from '../heroes/heroes.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private _routerNav:Router,
              private _searchComponent:SearchComponent) { }

  ngOnInit() {
  }
  buscarHeroe(texto:string){
    //redireccionar a pantalla de busqueda
    this._routerNav.navigate(['/search/',texto])

  }
}
