import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalharPokemonService } from 'src/app/shared/components/detalhar-pokemon/detalhar-pokemon.service';


@Component({
  selector: 'app-detalhar-pokemon',
  templateUrl: './detalhar-pokemon.component.html',
  styleUrls: ['./detalhar-pokemon.component.scss']
})
export class DetalharPokemonComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public pokemon,
    public detalharPokemonService: DetalharPokemonService
  ) { }

  dataPokemon = {
    peso: 0,
    altura: 0,
    tipo: [],
    habilidades: []
  }

  ngOnInit(): void {
    this.detalharPokemonService.getPokemon(this.urlToIdPokemon(this.pokemon.url))
    .subscribe((data: any)=>{
      this.dataPokemon.peso = data.weight /10;
      this.dataPokemon.altura = data.height / 10;
      this.dataPokemon.tipo = data.types.map(itens=>itens.type.name);
      this.dataPokemon.habilidades = data.abilities.map(itens=>itens.ability.name);
    })
  }

  imgPokemon(url) {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeroPad(this.urlToIdPokemon(url),3)}.png`
  }

  urlToIdPokemon(url){
    return url.substring(34, url.length - 1)
  }

}
