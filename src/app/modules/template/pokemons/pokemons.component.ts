import { Component, OnInit } from '@angular/core';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(
    private pokedexService: PokedexService
  ) { }

  allPokemons;

  loading: boolean = true;

  ngOnInit() {
    this.pokedexService.getAllPokemons()
    .subscribe((data:any)=>{
      console.log(data)
      this.loading = false;
      this.allPokemons = data.results
    })
  }

  imgPokemon(url) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.substring(34, url.length - 1)}.png`
  }

  urlToId(url){
    return url.substring(34, url.length - 1)
  }

}
