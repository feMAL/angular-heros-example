import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { HeroesServicio } from '../heroes/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'], 
  providers: [HeroesServicio]
})
export class HeroeComponent implements OnInit {
  public heroe;

  constructor(private _rutaActiva:ActivatedRoute,
              private _heroService:HeroesServicio,
              private _router:Router
    ) { }

  ngOnInit() {

    let heroeindex;
    this._rutaActiva.params.subscribe(respuesta=> heroeindex=respuesta['id']);
    this.heroe = this._heroService.getHeroe(heroeindex);
  }

  volver(){
    this._router.navigate(['heroes'])
  }

}
