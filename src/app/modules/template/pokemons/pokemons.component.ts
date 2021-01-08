import { Component, OnInit } from '@angular/core';
import { PokedexService } from './services/pokedex.service';
import { DetalharPokemonService } from 'src/app/shared/services/detalhar-pokemon.service';

export interface Pokemon {
  name: string;
  url: string;
}
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  constructor(
    private pokedexService: PokedexService,
    private pokemonDetalhado: DetalharPokemonService
  ) { }

  allPokemons:Array<Pokemon>;

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

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeroPad(this.urlToIdPokemon(url),3)}.png`
  }

  urlToIdPokemon(url){
    return url.substring(34, url.length - 1)
  }

  detalharPokemon(pokemon: Pokemon){
    this.pokemonDetalhado.abrirDetalhe(pokemon)
  }

}
