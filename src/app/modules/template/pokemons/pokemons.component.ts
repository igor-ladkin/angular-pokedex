import { Component, OnInit } from '@angular/core';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  allPokemons;

  ngOnInit() {
    this.pokedexService.getAllPokemons()
    .subscribe((data:any)=>{
      console.log(data)
      this.allPokemons = data.results
    })
  }

}
