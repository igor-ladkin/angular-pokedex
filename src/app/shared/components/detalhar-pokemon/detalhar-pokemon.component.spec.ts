import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPokemonComponent } from './detalhar-pokemon.component';

describe('DetalharPokemonComponent', () => {
  let component: DetalharPokemonComponent;
  let fixture: ComponentFixture<DetalharPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
