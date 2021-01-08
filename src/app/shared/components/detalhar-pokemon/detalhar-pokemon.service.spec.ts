import { TestBed } from '@angular/core/testing';

import { DetalharPokemonService } from './detalhar-pokemon.service';

describe('DetalharPokemonService', () => {
  let service: DetalharPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalharPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
