import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHeroeComponent } from './tarjeta-heroe.component';

describe('TarjetaHeroeComponent', () => {
  let component: TarjetaHeroeComponent;
  let fixture: ComponentFixture<TarjetaHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
