import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokedexService } from './services/pokedex.service';


@NgModule({
  declarations: [PokemonsComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokedexService,
  ]
})
export class PokemonsModule { }
